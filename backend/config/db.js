import mongoose from "mongoose";

export const connectDB = async () => {
    // await mongoose.connect('mongodb+srv://skcart:sanju-07@cluster0.05gua.mongodb.net/food-del').then(()=>console.log("DB connected"));
    await mongoose.connect('mongodb+srv://skcart:sanju-07@cluster0.05gua.mongodb.net/food-del').then(()=>console.log("DB connected"));

}