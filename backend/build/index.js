"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("./graphql/schema/schema");
const PORT = Number(process.env.PORT) || 8000;
const server = new server_1.ApolloServer({
    typeDefs: schema_1.schema,
    resolvers: {
        Query: {
            hello: () => `Hey there!, I am graphql server running on port ${PORT}`,
            hello2: () => `Hey there2!, I am graphql2 server running on port ${PORT}`,
        }
    },
});
(0, standalone_1.startStandaloneServer)(server, {
    listen: { port: PORT },
}).then(({ url }) => {
    console.log(`🚀 Server ready at: ${url}`);
});
