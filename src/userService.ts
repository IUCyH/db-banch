import { AppDataSource } from "./configs/orm";
import { User } from "./entities/user";

export default class UserService {
    private repository = AppDataSource.getRepository(User);

    async getUser(id: number) {
        const user = await this.repository.findOne({
            where: { id: id },
            relations: ["team"]
        });
        return user;
    }
}