import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    database:  "discord",
    password:  process.env.MYSQL_PASSWORD,
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entity/*.ts"],
    migrations: [],
    subscribers: [],
});
