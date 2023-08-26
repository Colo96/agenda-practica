import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const conector = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
  port: process.env.DBPORT,
});

const conectar = () => {
  conector.connect((error) => {
    if (error) throw error;
    console.log("conectado");
  });
};

export { conectar };
