import { cleanEnv, str } from "envalid";

export default function validateEnv() {
    cleanEnv(process.env, {
        DB_URL: str()
    });
}
