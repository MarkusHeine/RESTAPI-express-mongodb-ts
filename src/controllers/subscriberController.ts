import { Request, Response, NextFunction } from "express";
import { Subscriber } from "../models/subscribers";

// Find all subscribers

export const allSubscribers = async (req: Request, res: Response) => {
    try {
        const subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Add new subscriber

export const addNewSubscriber = async (req: Request, res: Response) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    });
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
};

// Find one subscriber

export const findOneSubscriber = async (req: Request, res: Response) => {
    res.status(200).send(res.subscriber);
};

// Delete subscriber

export const deleteOneSubscriber = async (req: Request, res: Response) => {
    try {
        await res.subscriber.remove();
        res.status(200).json({ message: "Deleted subscriber" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update subscriber

export const updateOneUser = async (req: Request, res: Response) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name;
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    }
    try {
        const ubdatedSubscriber = await res.subscriber.save();
        res.status(200).json(ubdatedSubscriber);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
};
