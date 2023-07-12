import express from 'express'; // module
import bodyParser from "body-parser";
import cors from "cors";

//variable
const PORT = 5000;
const app = express()

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//routing
let visit = 0;

app.get("/", (req, res) => {
    res.json({ "name": "HAPPPPY" })
});

app.get("/hi", (req, res) => {
    visit += 1;
    res.json({ "message": "안녕하세요 햅삐입니다." })
});

// server start
app.listen(PORT, () => {
  console.log(`✅ Listening on http://localhost:5000/`);
});