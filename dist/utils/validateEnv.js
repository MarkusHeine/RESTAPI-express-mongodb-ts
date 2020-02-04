"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var envalid_1 = require("envalid");
function validateEnv() {
    envalid_1.cleanEnv(process.env, {
        DB_URL: envalid_1.str()
    });
}
exports.default = validateEnv;
