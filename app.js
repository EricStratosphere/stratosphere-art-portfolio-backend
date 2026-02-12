import express from 'express';
import cookieParser from 'cookie-parser';
import artworkRouter from './routes/artwork.route.js';
import serviceRouter from './routes/service.route.js';
import experienceRouter from './routes/education-experience.route.js';
import mainPageRouter from './routes/mainpage.route.js';
import socialsRouter from './routes/socials.route.js';
import aboutMeRouter from './routes/aboutmepage.route.js';
import serviceArtworkRouter from './routes/serviceartwork.route.js';
import connectDB from './database/mongodb.js';
import { PORT, MONGODB_URI } from './config/env.js';
import cors from 'cors';
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended : false}))

app.use('/api/v1/artworks', artworkRouter);
app.use('/api/v1/services', serviceRouter);
app.use('/api/v1/experiences', experienceRouter);
app.use('/api/v1/mainpage', mainPageRouter);
app.use('/api/v1/socials', socialsRouter);
app.use('/api/v1/aboutmepage', aboutMeRouter);
app.use('/api/v1/serviceartwork', serviceArtworkRouter);
app.get('/', (req, res)=> {
    return res.send(`Welcome to the stratosphere art backend!  ${PORT}`);
});

//the reason the mongodb connection wasn't working before is because vercel disregards the app.listen function because it uses its own servers to run as oppose to app.listen which turns the machine its running on into its own server. By removing app.listen and calling connectDB() in the top level, we are able to connect our expressjs app to the mongodb atlas clusters successfully without error. I mean to be fair you could have the app.listen still, it's just not gonna work for vercel.

// app.listen(port, async()=>{
//     console.log(`Stratosphere\'s art backend running on http://localhost:${port}`);
//     // console.log(MONGODB_URI);
//     return await connectDB();
// });

export default app;