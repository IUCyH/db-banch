import { Request, Response } from "express";
import PostService from "./postService";
import autoBind from "../autoBind";

export default class PostController {
    private service = new PostService();

    constructor() {
        autoBind(this);
    }

    async getPosts(req: Request, res: Response) {
        let { date } = req.query;

        if(date === "0") {
            date = "9999-12-31 11:59:59";
        }

        const posts = await this.service.getPosts(date as string);
        res.status(200).json(posts.map(post => ({ id: post.id, title: post.title, content: post.content, create_at: post.createAt, user: { id: post.user.id, name: post.user.name } })));
    }
}