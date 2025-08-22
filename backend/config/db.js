import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://thearpitsinghchauhan:8009138392@cluster0.zangme9.mongodb.net/').then(() => console.log("DB Connected"));

}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.