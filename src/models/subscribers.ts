import mongoose, { Document } from "mongoose";

export interface ISubscriber extends Document {
    name: string;
    subscribedToChannel: string;
    subscribeDate: any;
}

export const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

export const Subscriber = mongoose.model<ISubscriber>(
    "Subscriber",
    subscriberSchema
);
