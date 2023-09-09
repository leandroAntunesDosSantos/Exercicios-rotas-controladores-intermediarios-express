const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda", "Luiza"];
let contador = 0;

app.get("/", (req, res) => {
  if (contador >= jogadores.length) {
    contador = 0;
  }
  res.send(`É a vez de ${jogadores[contador]} jogar!`);
  contador++;
});
app.get("/remover", (req, res) => {
  const { indice } = req.query;
  if (Number(indice) < 0 || Number(indice) >= jogadores.length) {
    return res.send(
      `Não existe jogador no índice informado (${indice}) para ser removido.`
    );
  }
  jogadores.splice(indice, 1);
  res.send(jogadores);
});
app.get("/adicionar", (req, res) => {
  const { nome, indice } = req.query;
  if (nome) {
    if (!indice) {
      jogadores.push(nome);
      res.send(jogadores);
    }
  }
  if (Number(indice) < 0 || Number(indice) > jogadores.length) {
    res.send(
      `O índice informado (${Number(
        indice
      )}) não existe no array. Novo jogador não foi adicionado.`
    );
  }
  if (nome) {
    if (indice) {
      jogadores.splice(Number(indice), 0, nome);
      res.send(jogadores);
    }
  }
});
app.listen(8000);
