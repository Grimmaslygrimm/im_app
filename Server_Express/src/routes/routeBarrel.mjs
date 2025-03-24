import { Router } from "express";
import loginRouts from "./loginAuth.mjs";
import profileRouts from "./profiles.mjs";

const router = Router();

router.use(profileRouts);
router.use(loginRouts);

export default router;