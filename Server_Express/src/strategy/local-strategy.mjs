import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../mongoose/schema/userModel.mjs";
import { comparePassword } from "../utils/bcrypt.mjs";

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    try {
         const findUser = await User.findById(id);
         if(!findUser) {
            console.log("User not found for:", id);
            return done(null, false, { message: "User not found" });
         }
         done(null, findUser);
    } catch (err) {
        done(err, null);
    }
})

export default passport.use(
    new Strategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username });
            if (!user) {
                console.log("User not found for:", username);
                return done(null, false, { message: "User not found" });
            }
            if (!comparePassword(password, user.password)) {
                console.log("Incorrect password for:", username);
                return done(null, false, { message: "Incorrect password" });
            }
            done(null, user);
        } catch (err){
            console.log("err");
            done(err, null);
        }
    })
);