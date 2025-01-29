import { AppDataSource } from "./configs/orm";
import { User } from "./entities/user";
import { DeepPartial } from "typeorm";

export default class UserService {
    private repository = AppDataSource.getRepository(User);

    async getUser(id: number) {
        const user = await this.repository.findOne({
            where: { id: id },
            select: ["id", "name", "email", "createAt"],
            relations: ["team"]
        });
        return user;
    }
    
    async createUser(user: DeepPartial<User>) {
        const result = await this.repository.insert(user);
        if(result.raw.length === 0) {
            throw new Error("Error creating user");
        }
    }
}