import express from "express";
import { AppDataSource } from "./configs/orm";
import userRouter from "./userRouter";
import UserService from "./userService";
import { User } from "./entities/user";
import { DeepPartial } from "typeorm";
import { Team } from "./entities/team";
import { Post } from "./entities/post";

const app = express();
const service = new UserService();

app.use("/users", userRouter);

const port = 8080;
const host = "0.0.0.0";
app.listen(port, host, async () => {
    console.log(`Server listening on ${ host }:${ port }`);

    try {
        await AppDataSource.initialize();
    } catch(error) {
        console.log(error);
        process.exit(1);
    }

    const postRepository = AppDataSource.getRepository(Post);
    for(let i = 0; i < 1000000; i++) {
        const userId = Math.floor(Math.random() * 999999) + 1;
        await postRepository.insert({ title: `post_${ i }`, content: "abc", userId: userId });
    }

    const teamRepository = AppDataSource.getRepository(Team);
    for(let i = 0; i < 100000; i++) {
        await teamRepository.insert({ name: `team_${ i }` });
    }

    for(let i = 0; i < 1000000; i++) {
        const teamId = Math.floor(Math.random() * 99999) + 1;
        const user: DeepPartial<User> = { name: `user_${ i }`, password: "abc1234", email: "abc@abc.com", teamId: teamId };
        await service.createUser(user);
    }
});