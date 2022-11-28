import { Sequelize } from 'sequelize'

export const sequelizeConnection = new Sequelize(
  process.env.DATABASE_NAME as string,
  process.env.DATABASE_USER as string,
  process.env.DATABASE_PASSWORD as string, {
    host: process.env.DATABASE_HOST as string,
    dialect: 'mysql'
  }
)
