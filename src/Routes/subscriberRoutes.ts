import * as express from "express";
import * as subscriberController from "../controllers/subscriberController";
import { getSubscriber } from "../middelware/getSubscriber";

const router = express.Router();

router.get("/", subscriberController.allSubscribers);
router.post("/", subscriberController.addNewSubscriber);
router.get("/:id", getSubscriber, subscriberController.findOneSubscriber);
router.delete("/:id", getSubscriber, subscriberController.deleteOneSubscriber);
router.patch("/:id", getSubscriber, subscriberController.updateOneUser);

module.exports = router;
