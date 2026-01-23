import express from 'express';
import cookieParser from 'cookie-parser';
import artworkRouter from './routes/artwork.route.js';
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended : false}))

app.use('/api/v1/artworks', artworkRouter);

app.get('/', (req, res)=> {
    return res.send('Welcome to the stratosphere art backend!');
});

app.listen(5500, async()=>{
    console.log('Subscription tracker running on http://localhost:5500');
});

export default app;