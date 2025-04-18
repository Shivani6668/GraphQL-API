import { Course } from "../models/courseModel"
import mongoose, { ObjectId } from 'mongoose';


export const getAllCourse = async ()=>{
    const course = await Course.find()
    return course;

}



export const getCourseById = async (parent:any,arg:{id:ObjectId})=>{
    const data = await Course.findById(arg.id)
    // const data = await Course.findOne({ _id: arg.id }); // or whatever your custom ID key is

    console.log("id",typeof arg.id);
    console.log("course",data);
    
    return data;

}
