const { buildSchema } = require('graphql');
module.exports = buildSchema(`
    type User{
        _id: ID
        nome: String
        email: String
        senha: String
    }

    type RootQuery{
        users: [User]
        findUser(email:String): User
        login(email:String,senha:String): Boolean
    }

    type RootMutation{

        insert(id:ID, name:String, email:String): User
        deleteUser(id:ID): Boolean
        updateUser(id:ID, name:String, email:String): Boolean
        
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
`)