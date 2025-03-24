import { Router } from "express";
//import { validationResult, matchedData } from "express-validator";
import passport from "passport";
import "../strategy/local-strategy.mjs";

const router = Router();

router.post("/api/auth",
    passport.authenticate("local"),
    (request, response) => {
        response.status(200).send("Login Successful");
});

router.post('/api/auth/logout', (request, response) => {
    
    if (!request.user) return response.sendStatus(401);

    request.logout((err) => {
        if (err) return response.sendStatus(400);
        response.status(200).send("logout Successful");
    });
});

export default router;