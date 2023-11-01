const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: `${process.env.HOST}`,
//     dialect: "postgres",
//   }
// );
const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);
const Users = require("./database/models/users")(sequelize);
const Client = require("./database/models/clientes")(sequelize);
const Product = require("./database/models/stock")(sequelize);
const Orders = require("./database/models/pedidos")(sequelize);

try {
  sequelize.authenticate({ logging: false });
  sequelize.sync({ force: false, logging: false }).then(() => {
    console.log("Connection successfully");
  });
} catch {
  console.error("Unable to connect", error);
}

module.exports = { Users, Product, Client, Orders };
