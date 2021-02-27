import express, { Request, Response, NextFunction } from 'express';
import { connectToDB } from './utils/db';
import { config } from 'dotenv';
import { mainRouter } from './core/routes/index.routes';
import morgan from "morgan";
import { accessLogger } from "./utils/morganLogger";
import { cors } from "./utils/cors";

// Initialize express
const app = express();

// Middlewares
// app.use(cors(environment.corsOptions));
app.use(express.json());
app.use(morgan("combined", { stream: accessLogger }));

//Handle cors erros
app.use(cors)

// Routes
app.use("/api/v1", mainRouter);

// Error handling 404
app.use("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ error: `Not found ${req.baseUrl} not exists` });
});

app.listen(process.env.PORT, async () => {
    console.log(`Server is running on port ${process.env.PORT}...`);
    await connectToDB();
});