const express = require("express");
var bodyParser = require("body-parser");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;

const user_Routes = require("./routes/userRoutes");
const product_Routes = require("./routes/productRoutes");
const clientes_Routes = require("./routes/clientesRoutes");
const pedidos_Routes = require("./routes/pedidosRoutes");

app.use(bodyParser.json());
app.use(cors());
app.use("/api", user_Routes);
app.use("/api", product_Routes);
app.use("/api", clientes_Routes);
app.use("/api", pedidos_Routes);

app.listen(port, () => {
  console.log(`Now listening in port + ${port}`);
});
