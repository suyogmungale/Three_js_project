import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config()
app.use(cors())
app.use(express.json({limig:"50mb"}))


app.get('/' , (req,res) => {
    res.status(200).json({message: "hello from suyog"})
})

app.listen(8080, () => {
    console.log('port 8080')
})