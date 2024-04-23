import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';
import 'dotenv/config';

export const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  port: parseInt(<string>process.env.MYSQL_PORT, 10),
});

export const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Auth Service connection to DB success!');
  } catch (error) {
    console.log('Auth Service connection to DB failed!', error);
  }
};
