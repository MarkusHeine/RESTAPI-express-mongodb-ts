"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var subscriberController = __importStar(require("../controllers/subscriberController"));
var getSubscriber_1 = require("../middelware/getSubscriber");
var router = express.Router();
router.get("/", subscriberController.allSubscribers);
router.post("/", subscriberController.addNewSubscriber);
router.get("/:id", getSubscriber_1.getSubscriber, subscriberController.findOneSubscriber);
router.delete("/:id", getSubscriber_1.getSubscriber, subscriberController.deleteOneSubscriber);
router.patch("/:id", getSubscriber_1.getSubscriber, subscriberController.updateOneUser);
module.exports = router;
