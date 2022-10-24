import express from "express";
import cors from "cors";
import { block, allow } from "./middleware.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(cors()); // config cors so that front-end can use
app.options("*", cors());

import {
    getLimit,
    getRandomId,
    getQuestionContent,
    createQuestion,
    deleteQuestion,
    getQuestionAnswer,
} from "./controller/question-controller.js";

const routes = express.Router();

routes.get("/", (_, res) =>
    res.send(`Server live at ${new Date().toUTCString()}`)
);
routes.post("/create/question", block, createQuestion);
routes.post("/delete/question", block, deleteQuestion);
routes.post("/get/limit", allow, getLimit);
routes.post("/get/random-id", allow, getRandomId);
routes.post("/get/question-content", allow, getQuestionContent);
routes.post("/get/question-answer", allow, getQuestionAnswer);

export default routes;
