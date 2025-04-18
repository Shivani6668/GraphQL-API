"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourseById = exports.getAllCourse = void 0;
const courseModel_1 = require("../models/courseModel");
const getAllCourse = () => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield courseModel_1.Course.find();
    return course;
});
exports.getAllCourse = getAllCourse;
const getCourseById = (parent, arg) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield courseModel_1.Course.findById(arg.id);
    // const data = await Course.findOne({ _id: arg.id }); // or whatever your custom ID key is
    console.log("id", typeof arg.id);
    console.log("course", data);
    return data;
});
exports.getCourseById = getCourseById;
// export const getCourseById = async (parent: any, arg: { id: string }) => {
//   if (!mongoose.Types.ObjectId.isValid(arg.id)) {
//       throw new Error("Invalid Course ID format.");
//   }
//   console.log("id",arg.id);
//   const course = await Course.findById(arg.id);
//   console.log("data",course);
//   if (!course) {
//       throw new Error("Course not found");
//   }
//   return course;
// };
