import mongoose from "mongoose";

export const connectDB = (uri: string) =>
  mongoose
    .connect(uri, { dbName: "GraphQL" })
    .then((mongooseInstance) => {
      console.log(`Connected with ${mongooseInstance.connection.name}`);
    })
    .catch((err) => console.error("MongoDB connection error:", err));
