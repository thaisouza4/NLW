const express = require('express');
const app = express();

//Rota principal
app.get('/', (_req, res) => {
    res.send('Bem-vindo a minha primeira API com Node.js!');
});

//Subir o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});