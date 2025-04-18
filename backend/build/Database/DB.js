"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = (uri) => mongoose_1.default
    .connect(uri, { dbName: "GraphQL" })
    .then((mongooseInstance) => {
    console.log(`Connected with ${mongooseInstance.connection.name}`);
})
    .catch((err) => console.error("MongoDB connection error:", err));
exports.connectDB = connectDB;
