"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("./graphql/schema/schema");
const DB_1 = require("./Database/DB");
const dotenv_1 = __importDefault(require("dotenv"));
const userController_1 = require("./controller/userController");
const courseController_1 = require("./controller/courseController");
dotenv_1.default.config({ path: "./.env" });
const PORT = Number(process.env.PORT) || 8000;
const mongoURI = process.env.mongoURI;
(0, DB_1.connectDB)(mongoURI);
const server = new server_1.ApolloServer({
    typeDefs: schema_1.schema,
    resolvers: {
        Query: {
            users: userController_1.getAllUser,
            courses: courseController_1.getAllCourse,
            course: courseController_1.getCourseById
        }
    },
});
(0, standalone_1.startStandaloneServer)(server, {
    listen: { port: PORT },
}).then(({ url }) => {
    console.log(`🚀 Server ready at: ${url}`);
});
