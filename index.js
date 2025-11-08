import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Seja bem-vindo à VPS do Odair" });
});

app.listen(80, () => {
  console.log("Servidor rodando na porta 80");
});
