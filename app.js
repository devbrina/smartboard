const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', async (req, res) => {
    try {
        const { nome, email, mensagem } = req.body;
        const query = 'INSERT INTO mensagens (nome, email, mensagem) VALUES ($1, $2, $3)';
        const values = [nome, email, mensagem];
        await pool.query(query, values);
        res.status(200).send('Mensagem enviada com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        res.status(500).send('Erro ao enviar mensagem');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
