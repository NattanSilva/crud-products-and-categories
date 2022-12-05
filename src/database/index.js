import pkg from "pg";
const {Client} = pkg

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: process.env.DB_USER,
        host: "localhost",
        database: "tests_products",
        password: process.env.DB_PASSWORD,
        port: 5432,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);

export const startDatabase = async () => {
  await database.connect();
  console.log('database conectada')
};

export default database;