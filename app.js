import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res)=> {
    return res.send('Welcome to the stratosphere art backend!');
})

app.listen(5500, async()=>{
    console.log('Subscription tracker running on http://localhost:5500');
})

export default app;