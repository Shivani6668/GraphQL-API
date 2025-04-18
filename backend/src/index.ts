import express from "express";
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import { schema } from "./graphql/schema/schema";
import { connectDB } from "./Database/DB";
import dotenv from "dotenv"
import { getAllUser } from "./controller/userController";
import { getAllCourse, getCourseById } from "./controller/courseController";

dotenv.config({ path:"./.env"})

const PORT = Number(process.env.PORT) || 8000;

const mongoURI = process.env.mongoURI!;
connectDB(mongoURI)

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query:{
      users: getAllUser,
      courses: getAllCourse,
      course: getCourseById

      
    }
  },
})

startStandaloneServer(server, {
  listen: { port: PORT },
}).then(({ url }) => {
  console.log(`🚀 Server ready at: ${url}`);
} ); 