import express from 'express';
import diaries from './routes/diaries';
import cors from 'cors';


const app = express();
app.use(express.json())

app.use(cors(
  {
    origin: "*",
    methods: ["GET", "POST", "PUT"]
  }));


const PORT = 3000;

app.use('/api', diaries)

app.get('/', (_req, res) => {
  res.send("hola")
})


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})