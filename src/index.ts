import express, { Request, Response, NextFunction } from 'express';
import { config } from 'dotenv';
import { connectToDB } from './utils/db';
//Initialize express
const app = express();
//Initialize dotenv
config();

//Import controllers
import * as controllerOne from './core/controllers/test-1.controller';
import * as controllerTwo from './core/controllers/test-2.controller';


    const baseUrl = '/api'

    //Connect to mongo db
    connectToDB();

    app.use(express.json());

    //Route configuration
    app.use(`${baseUrl}/hello`, controllerOne.sayHello);
    app.use(`${baseUrl}/hello-again`, controllerTwo.sayHello2);

    //Error handling 404
    app.use('/', (req: Request, res: Response, next: NextFunction) => {
        res.status(404).json({ error: `Not found. Try using ${baseUrl} instead...` });
    })

    app.listen(process.env.PORT, () => { console.log(`Server is running on port ${process.env.PORT}...`) });