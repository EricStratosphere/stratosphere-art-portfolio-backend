import {config} from 'dotenv';

config(
    {path : `.env.local`}
)

export const {PORT, MONGODB_URI} = process.env;