const express = require("express");
const { listarImoveis, imovelPorId } = require("./controladores/imoveis");

const app = express();

app.get("/imoveis", listarImoveis);
app.get("/imoveis/:id", imovelPorId);
app.listen(8000);
