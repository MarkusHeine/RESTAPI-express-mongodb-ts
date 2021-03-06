import { Request, Response, NextFunction } from "express";
import { Subscriber } from "../models/subscribers";

export const getSubscriber = async (
    req: Request,
    res: any,
    next: NextFunction
) => {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id);
        if (subscriber === null) {
            return res.status(404).json({ message: "Cannot find subscriber" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.subscriber = subscriber;
    next();
};
