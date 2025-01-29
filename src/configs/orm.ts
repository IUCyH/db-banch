import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { CustomLogger } from "../customLogger";

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "abc1234",
    database: "bench",
    synchronize: false,
    logger: new CustomLogger(),
    namingStrategy: new SnakeNamingStrategy(),
    extra: {
        timezone: "Asia/Seoul",
        dateStrings: true
    },
    entities: [__dirname + "/../entities/**/*.{js,ts}"],
    subscribers: [],
    migrations: []
});