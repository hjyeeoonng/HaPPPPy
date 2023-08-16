import express from 'express'; // module
import pg from 'pg';
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv'

dotenv.config(); // .env 파일에서 환경 변수를 읽어옴

//variable
const PORT = 5000;
const app = express()

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//routing
const pool = new pg.Pool({
  host: process.env.DB_HOST, // 환경 변수에서 값 읽어옴
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/", (req, res) => {
  res.json("success");
});

// 첫 번째 페이지에서 입력받은 값(수입/수출, 항공/해상) 저장
let shipmentType = "";
let countrySelect = "";
let transportType = "";


app.post("/inputPage1", (req, res) => {
  shipmentType = req.body.shipmentType;
  countrySelect = req.body.country;
  transportType = req.body.transportType;
  res.send("success");
});

// 물품 정보를 입력받는 두 번째 페이지
app.post("/inputPage2", async (req, res) => {
  // console.log(req.body)
  const { item_name, hs_code, total_price, total_weight, width, height, depth, item_number } = req.body;

  const client = await pool.connect();

  try {
    const query = "INSERT INTO products (type, country,  transport, item_name, hs_code, total_price, total_weight, width, height, depth, item_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
    await client.query(query, [shipmentType, countrySelect, transportType, item_name, hs_code, total_price, total_weight, width, height, depth, item_number]);
    res.send("success");
  } catch (error) {
    console.error("Error while inserting product data:", error);
    res.status(500).send("Error while inserting product data.");
  } finally {
    client.release();
  }
});

// 세 번째 페이지에서 입력한 값을 보여주는 화면
app.get("/displayData", async (req, res) => {
  const client = await pool.connect();
  
  try {
    const result = await client.query(`SELECT * FROM products`);
    const target = result.rows[result.rows.length-1];
    // res.json(target);
    
    console.log(target)
    let estimate_price = 100;
    // 견적 계산식
    // 가로 : a m
    // 세로 : b m
    // 높이 : c m
    // 개수 : d 개 ******추가할 예정
    // 총 중량 : e kg
    // 구간운임 : f ******추가할 예정(나라별 환율도)
    // 이면(axbxcxd)CBM / ekg인 화물인 경우
    // (해상은 1CBM = 1000kg, 항공은 1CBM = 167kg)

    //나라별 ,운송방법별 f값, 환율
    const f={
      "New York" : {
        "해상" : 90,
        "항공" : 2250,
        countryrate : 1286.65
      },
      "Ottawa" : {
        "해상" : 100,
        "항공" : 2000,
        countryrate : 980.19
      },
      "Berlin" : {
        "해상" : 120,
        "항공" : 3000,
        countryrate : 1444.22
      },
      "Milano" : {
        "해상" : 110,
        "항공" : 2890,
        countryrate : 1444.22
      },
      "Tokyo" : {
        "해상" : 40,
        "항공" : 1250,
        countryrate : 9.21
      },
    }

      // (가로 * 세로* 높이* 개수)CBM
      const CBM = target.width * target.height * target.depth * target.item_number
      // console.log("target.transport")
      // console.log(transportType)
      // console.log(countrySelect)
      if (transportType == "해상") {
        const CBMUnit = 1000
        if (target.total_weight < CBMUnit) {
          //해상 e < 1000 : (axbxcxd)CBM x $f x 1,286.65달러 환율
          estimate_price = CBM * f[countrySelect][transportType] * f[countrySelect].countryrate
        }
        else {
          //해상 e >= 1000 : (e/1000)CBM x $f x 1,286.65달러 환율
          estimate_price = target.total_weight / CBMUnit * f[countrySelect][transportType] * f[countrySelect].countryrate
        }
      }

      else if (transportType == "항공") {
        const CBMUnit = 167
        //항공 e < axbxcxdx167 : (axbxcxd)CBM x 167kg x \f
        if (target.total_weight < CBM * CBMUnit) {
          estimate_price = CBM * CBMUnit * f[countrySelect][transportType] * f[countrySelect].countryrate
        }
        //항공 e >= axbxcxdx167 : e x \f
        else {
          estimate_price = target.total_weight * f[countrySelect][transportType] * f[countrySelect].countryrate
        }
      }

      if (target.total_price > 200000) {
        //물품 총 가액 g \, 관세율(물품명, HSCode)*****(추가 예정)
        // (통관기준 금액 20만)
        // g >20만 : 최종 금액 = 위 계산한 결과값 x 관세율
        estimate_price = estimate_price * 0.8
      }
      
      console.log("estimate_price")
      console.log(estimate_price)

      res.json({
        ...target,
        'estimatePrice': estimate_price
      });
  }
  catch (error) {
    console.error("Error while fetching product data:", error);
    res.status(500).send("Error while fetching product data.");
  } finally {
    client.release();
  }
});
  


// 입력 정보 삭제(뒤로가기/처음으로 돌아가기 실행 시 필요)
app.delete('/delete', async (req, res) => {
  try {
    const client = await pool.connect();
    await client.query('DELETE FROM products');

    client.release();

    res.status(200).json({ message: '모든 물품 데이터가 삭제되었습니다.' });
  } catch (error) {
    res.status(500).json({ error: '물품 데이터 삭제 실패' });
  }
});

//company업체 정보 테이블
app.get("/company", async (req, res) => {
  // res.json({ "message": `company테이블` })
  const client = await pool.connect()
  // console.log(req.query)
  //첫번째 방법(for 문)
  if (req.query.id) {
    const result = await client.query("SELECT * FROM company")
    for (let i = 0; i < result.rows.length; i++) {
      if (result.rows[i].name == req.query.name) {
        res.json(result.rows[i])
        break;
      }
    }
  } else {
    const result = await client.query("SELECT * FROM company")
    res.json(result.rows)
  }
});

// server start
app.listen(PORT, () => {
  console.log(`✅ Listening on http://localhost:5000/`);
});