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

    // const repository = AppDataSource.getRepository(Post);
    // for(let i = 0; i < 20000; i++) {
    //     const userId = Math.floor(Math.random() * 9999) + 1;
    //     await repository.insert({ title: `post_${ i }`, content: "abc", userId: userId });
    // }

    // const repository = AppDataSource.getRepository(Team);
    // for(let i = 0; i < 15000; i++) {
    //     await repository.insert({ name: `team_${ i }` });
    // }
    //
    // for(let i = 0; i < 10000; i++) {
    //     const teamId = Math.floor(Math.random() * 15000);
    //     const user: DeepPartial<User> = { name: `user_${ i }`, password: "abc1234", email: "abc@abc.com", teamId: teamId };
    //     await service.createUser(user);
    // }
});