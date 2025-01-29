import express from "express";
import PostController from "./postController";

const router = express.Router();
const controller = new PostController();

router.get("/", controller.getPosts);

export default router;