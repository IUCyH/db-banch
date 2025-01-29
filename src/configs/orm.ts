import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "abc1234",
    database: "bench",
    synchronize: false,
    logging: ["query", "error", "warn"],
    maxQueryExecutionTime: 1,
    namingStrategy: new SnakeNamingStrategy(),
    extra: {
        timezone: "Asia/Seoul",
        dateStrings: true
    },
    entities: [__dirname + "/../entities/**/*.{js,ts}"],
    subscribers: [],
    migrations: []
});