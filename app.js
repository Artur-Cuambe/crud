const express = require('express');
const { graphqlHTTP } = require('express-graphql');
 
const graphiQlSchema = require('./graphql/schema/index');
const graphiQlResolvers = require('./graphql/resolvers/index'); 

const app = express();
 
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphiQlSchema,
    rootValue: graphiQlResolvers,
    graphiql: true,
  }),
);
 
app.listen(8000, () => {
  console.log("Server running at http: " + 8000);
});