import { Router } from "express";
import loginRouts from "./loginAuth.mjs";
import profileRouts from "./profiles.mjs";
import messageRouts from "./messages.mjs";

const router = Router();

router.use(messageRouts);
router.use(profileRouts);
router.use(loginRouts);

export default router;