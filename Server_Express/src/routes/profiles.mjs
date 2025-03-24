import { Router } from "express";
import { User } from "../mongoose/schema/userModel.mjs";
import { hashPassword } from "../utils/bcrypt.mjs";
import { validationResult, checkSchema, matchedData } from "express-validator";
import { createUserValidationSchema } from "../utils/profile/userValidationSchema.mjs";

const router = Router();

router.post("/api/createUser",
    checkSchema(createUserValidationSchema),
    async (request, response) => {
    const result = validationResult(request);
    console.log(result);
    if (!result.isEmpty()) 
        return response.status(400).send({ errors: result.array() });

    const data = matchedData(request);
    data.password = await hashPassword(data.password); //password is garunteed here from the 
    //checkSchema(createUserValidationSchema) middleware
    console.log(data);
    const newUser = new User(data);
    try{
        const savedUser = await newUser.save();
        return response.status(201).send(savedUser);
    } catch (err) {
        console.log(err);
        return request.sendStatus(400);
    }
});

router.get('/api/user/:username', async (request, response) => {
    const { username } = request.params;
    const findUser = await User.findOne({ username });
    if(!findUser) {
        throw new Error("User not found");
     }
    return response.status(200).send(findUser);
});



export default router;