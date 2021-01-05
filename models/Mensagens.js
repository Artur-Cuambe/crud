const mongoose = require('mongoose');
const { Schema } = mongoose;

const mensagem = new Schema({
    texto: {
        type: String
    },
    email: {
        type: String
    },
    
},{
    timestamps: true
});
mongoose.model('Mensagen', mensagem);
