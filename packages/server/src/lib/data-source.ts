import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "sqljs",
  location: process.env.DB_FILE || "/eve-incursions/tmp/app.db",
  autoSave: true,
  synchronize: true,
  logging: false,
  entities: [__dirname + "/../models/*.ts"],
  migrations: [],
  subscribers: [],
})
