import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbConnectionOption = {
  host: process.env.HOST,
  user: process.env.USER,
  database:process.env.DATABASE,
};

const dbConnection = mysql.createPool(dbConnectionOption);

export const connectToMySQL = async () => {
    try {
        await dbConnection.getConnection();

        console.log('MySQL database connected!');
    } catch (err) {
        console.log('MySQL database connection error!');

        process.exit(1);
    }
};

export default dbConnection;
