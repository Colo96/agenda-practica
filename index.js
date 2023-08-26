import express from "express";
import { conectar } from "./src/mysql_conector.js";

const app = express();

app.listen("8000", () => {
  console.log("Aplicación iniciada en el puerto 8000");
});

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("./views"));
app.use(express.static("./src"));
app.use(express.static("./css"));

app.get("/", (req, res) => {
  conectar();
  res.render("index", {
    title: "Aplicación de Contactos",
    dato: "Cualquier texto...",
  });
});
