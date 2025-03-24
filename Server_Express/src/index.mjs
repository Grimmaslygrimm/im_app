import express from "express";
import routes from "./routes/routeBarrel.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import mongoose from "mongoose";
import passport from "passport";
import MongoStore from "connect-mongo";


const app = express();

mongoose.connect('mongodb://localhost:27017/MessagePro')
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(`error: ${err}`));

app.use(express.json());
app.use(cookieParser('secret'));
app.use(session(
    {
        secret: "for the emperor",
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60000 * 60
        },
        store: MongoStore.create({
            client: mongoose.connection.getClient(),
        }),
    }
));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`)
});