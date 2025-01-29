import { Request, Response } from "express";
import UserService from "./userService";

export default class UserController {
    private service: UserService = new UserService();

    async getUser(req: Request, res: Response) {
        const idString = req.params.id;
        const id = parseInt(idString);

        const user = await this.service.getUser(id);
        if(!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(200).json(user);
    }
}