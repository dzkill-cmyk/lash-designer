const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'data', 'mensagens.json');
const ADMIN_KEY = process.env.ADMIN_KEY || 'mirelly123';

app.use(express.json());

// Serve arquivos estáticos da pasta /public
app.use(express.static(path.join(__dirname, 'public')));

// Serve arquivos estáticos da raiz
app.use(express.static(__dirname));

function lerMensagens() {
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  } catch {
    return [];
  }
}

// Rota padrão para servir o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Servidor rodando na porta ', PORT);
});