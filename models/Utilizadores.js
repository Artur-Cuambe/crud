const mongoose = require('mongoose');
const { Schema } = mongoose;

const utilizador = new Schema({
    nome: {
        type: String
    },
    email: {
        type: String
    },
    senha: {
        type: String
    }
},{
    timestamps: true
});

mongoose.model('Utilizador', utilizador);
