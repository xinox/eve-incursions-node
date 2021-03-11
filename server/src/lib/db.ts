import { createConnection as cc } from "typeorm";

export const createConnection = () => cc({
  "type": "mysql",
  "host": process.env.MYSQL_HOST,
  "username": process.env.MYSQL_USER,
  "database":  process.env.MYSQL_DB,
  "password":  process.env.MYSQL_PASSWORD,
  "entities": ["./src/models/*.ts"]
});
