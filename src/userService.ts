import { AppDataSource } from "./configs/orm";
import { User } from "./entities/user";
import { DeepPartial } from "typeorm";

export default class UserService {
    private repository = AppDataSource.getRepository(User);

    async getUser(id: number) {
        const user = await this.repository.createQueryBuilder("user")
            .select([
                "user.id",
                "user.name",
                "user.email",
                "user.createAt"
            ])
            .leftJoin("user.team", "team")
            .addSelect(["team.id", "team.name"])
            .leftJoin("user.posts", "post")
            .addSelect(["post.id", "post.title", "post.content"])
            .where("user.id = :id", { id: id })
            .getOne();
        return user;
    }
    
    async createUser(user: DeepPartial<User>) {
        const result = await this.repository.insert(user);
        if(result.raw.length === 0) {
            throw new Error("Error creating user");
        }
    }
}