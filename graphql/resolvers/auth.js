const { isObjectType } = require("graphql");
const mongoose = require('mongoose');
require('../../models/Utilizadores');
const Utilizador = mongoose.model('Utilizador');


mongoose.connect('mongodb://localhost/crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o BD MongoDB realizado com sucesso!");
}).catch((err) => {
    console.log("Erro: Conexão com o BD MongoDB não realizado com sucesso: " + err);
});


async function users() {
    return await Utilizador.find();
}


function findUser({ email }) {
    try {
        return data.find(u => u.email == email);
    } catch (error) {
        console.log(error);
    }
}

function insert({ id, name, email, senha }) {
    try {
        data.push({ id, name, email, senha });
        return data[data.length - 1];
    } catch (error) {
        console.log(error);
    }
}

function deleteUser({ id }) {
    try {
        var index = data.findIndex(u => u.id == id);
        if (index > -1) {
            data.splice(index, 1);
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
    }

}

//Esta é a função que faltava para o CRUD, recebe todos os atributos da entidade User para actualizar os dados, 
//com a função findIndex recuperamos a linha do array pelo ID e a função splice elimina o array encontrado 
//subistituindo com novos dados fazendo assim a actualizção
function updateUser({ id, name, email, senha }) {
    try {
        var index = data.findIndex(u => u.id == id);
        if (index > -1) {
            data.splice(index, 1, { id: 2, name, email, senha });
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
    }
}

function login({ email, senha }) {
    var index = data.find(u => u.email == email && u.senha == senha);
    if ((index)) {
        return true;
    } else {
        return false;

    }
}

module.exports = {
    users,
    findUser,
    insert,
    deleteUser,
    updateUser,
    login
}