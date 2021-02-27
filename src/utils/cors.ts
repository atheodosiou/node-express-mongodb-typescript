
import { Request, Response, NextFunction } from "express";

export const cors = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Expose-Headers', '*, Authorization, X-Access-Token');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next();
};