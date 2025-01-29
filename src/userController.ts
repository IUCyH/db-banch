import { Request, Response } from "express";
import UserService from "./userService";
import autoBind from "./autoBind";

export default class UserController {
    private service: UserService = new UserService();

    constructor() {
        autoBind(this);
    }

    async getUser(req: Request, res: Response) {
        const idString = req.params.id;
        const id = parseInt(idString);

        const user = await this.service.getUser(id);
        if(!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(200).json({ id: user.id, name: user.name, email: user.email, create_at: user.createAt });
    }

    async createUser(req: Request, res: Response) {
        const user = req.body;

        try {
            const result = await this.service.createUser(user);
            res.status(201).json(result);
        } catch {
            res.status(500).json({ message: "Error creating user" });
            return;
        }
    }
}