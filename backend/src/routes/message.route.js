import express from "express";
import { getAllContacts, getChatPartners, getMessagesByUserId, sendMessages } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection ,protectRoute);

router.get("/contacts" ,getAllContacts );
router.get("/chats", getChatPartners );
router.get("/:id" , getMessagesByUserId );
router.post("/send/:id", sendMessages );

export default router;