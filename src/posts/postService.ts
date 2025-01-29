import { AppDataSource } from "../configs/orm";
import { Post } from "../entities/post";

export default class PostService {
    private repository = AppDataSource.getRepository(Post);

    async getPosts(date: string) {
        const posts = await this.repository
            .createQueryBuilder("post")
            .select(["post.id", "post.title", "post.content", "post.createAt"])
            .innerJoin("post.user", "user")
            .addSelect(["user.id", "user.name"])
            .orderBy("post.createAt", "DESC")
            .where("post.createAt < :date", { date: date })
            .limit(100)
            .getMany();
        return posts;
    }
}