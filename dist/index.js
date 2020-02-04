"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv = __importStar(require("dotenv"));
var bodyParser = __importStar(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
dotenv.config();
var app = express_1.default();
var subscribersRouter = require("./Routes/subscriberRoutes");
var DB_URL = process.env.DB_URL;
mongoose_1.default.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function (error) {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log("conntected to db");
    }
});
app.use(express_1.default.json());
app.use(bodyParser.json());
app.use("/subscribers", subscribersRouter);
app.listen(3000, function () {
    console.log("Listening on 3000");
});
