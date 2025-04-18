import { User } from "../models/userModels"
export const getAllUser = async ()=>{
    const users = await User.find()
    return users;
}