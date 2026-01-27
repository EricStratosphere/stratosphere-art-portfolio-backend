import express from 'express';
import cookieParser from 'cookie-parser';
import artworkRouter from './routes/artwork.route.js';
import serviceRouter from './routes/service.route.js';
import experienceRouter from './routes/education-experience.route.js';
import mainPageRouter from './routes/mainpage.route.js';
import socialsRouter from './routes/socials.route.js';
import connectDB from './database/mongodb.js';
import { PORT, MONGODB_URI } from './config/env.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended : false}))

app.use('/api/v1/artworks', artworkRouter);
app.use('/api/v1/services', serviceRouter);
app.use('/api/v1/experiences', experienceRouter);
app.use('/api/v1/mainpage', mainPageRouter);
app.use('/api/v1/socials', socialsRouter);
app.get('/', (req, res)=> {
    return res.send('Welcome to the stratosphere art backend!');
});

app.listen(PORT, async()=>{
    console.log(`Stratosphere\'s art backend running on http://localhost:${PORT}`);
    connectDB();
});
export default app;