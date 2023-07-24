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
  host: process.env.DB_HOST_2, // 환경 변수에서 값 읽어옴
  user: process.env.DB_USER_2,
  password: process.env.DB_PASSWORD_2,
  database: process.env.DB_NAME_2,
});

// 첫 번째 페이지에서 입력받은 값(수입/수출, 항공/해상) 저장
let shipmentType = "";
let transportType = "";

app.post("/inputPage1", (req, res) => {
  shipmentType = req.body.shipmentType;
  transportType = req.body.transportType;
  res.send("success");
});

// 물품 정보를 입력받는 두 번째 페이지
app.post("/inputPage2", async (req, res) => {
  const { item_name, hs_code, total_price, total_weight, width, height, depth } = req.body;

  const client = await pool.connect();

  try {
    const query = "INSERT INTO products (type, transport, item_name, hs_code, total_price, total_weight, width, height, depth) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
    await client.query(query, [shipmentType, transportType, item_name, hs_code, total_price, total_weight, width, height, depth]);
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
    const query = "SELECT * FROM products";
    const result = await client.query(query);
    res.json(result.rows);
  } catch (error) {
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
app.get("/company",async (req, res)=>{
  // res.json({ "message": `company테이블` })
  const client = await pool.connect()
  console.log(req.query)
  //첫번째 방법(for 문)
  if (req.query.id) {
      const result = await client.query("SELECT * FROM company_table")
      for (let i = 0; i < result.rows.length; i++) {
          if (result.rows[i].name == req.query.name) {
              res.json(result.rows[i])
              break;
          }
      }
  } else {
      const result = await client.query("SELECT * FROM company_table")
      res.json(result.rows)
  }


});

// server start
app.listen(PORT, () => {
  console.log(`✅ Listening on http://localhost:5000/`);
});