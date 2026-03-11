const express = require("express");
const cors = require("cors");
const sequelize = require("./database/index");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
});