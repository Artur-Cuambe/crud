const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/Utilizadores');
const Utilizador = mongoose.model('Utilizador');

// require('./models/Mensagens');
// const Mensagem = mongoose.model('Mensagen');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

mongoose.connect('mongodb://localhost/crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o BD MongoDB realizado com sucesso!");
}).catch((err) => {
    console.log("Erro: Conexão com o BD MongoDB não realizado com sucesso: " + err);
});

app.get('/utilizadores', async (req, res) => {
    await Utilizador.find({}).then((utilizadores) => {
        return res.json({
            error: false,
            utilizadores
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum resgistro encontrado!"
        });
    });
});

app.post('/utilizador', async (req, res) => {
    let data = req.body;
    await Utilizador.find(data).then((utilizadores) => {
        return res.json({
            error: false,
            utilizadores
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum resgistro encontrado!"
        });
    });
});

app.post('/utilizadores', async (req, res) => {

    await sleep(3000);

    function sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    await Utilizador.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Utilizador não cadastrado com sucesso!"
        });
    });

    return res.json({
        error: false,
        message: "Utilizador cadastrado com sucesso!"
    });
});

app.put('/utilizadores/:email', async (req, res, next) => {
    await sleep(3000);

    function sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    await Utilizador.updateOne({email:req.params.email},req.body,).then((utilizadores) => {
        return res.json({
            error: false,
            utilizadores
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao actualizar!"
        });
    });
});


app.delete('/utilizadores/:email', async (req, res) => {
    await Utilizador.deleteOne({email: req.params.email}).then((utilizadores) => {
        return res.json({
            error: false,
            utilizadores
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir dado!"
        });
    });
});


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
