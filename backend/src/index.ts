import express from "express";
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import { schema } from "./graphql/schema/schema";
const PORT = Number(process.env.PORT) || 8000;
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query:{
      hello: () => `Hey there!, I am graphql server running on port ${PORT}`,
      hello2: () => `Hey there2!, I am graphql2 server running on port ${PORT}`,
    }
  },
})

startStandaloneServer(server, {
  listen: { port: PORT },
}).then(({ url }) => {
  console.log(`🚀 Server ready at: ${url}`);
} ); 