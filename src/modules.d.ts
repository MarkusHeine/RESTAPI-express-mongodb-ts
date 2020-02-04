import { ISubscriber } from "./models/subscribers";

declare module NodeJS {
    export interface ProcessEnv {
        DB_URL: string;
    }
}

declare module "express-serve-static-core" {
    interface Response {
        subscriber: ISubscriber;
    }
}
