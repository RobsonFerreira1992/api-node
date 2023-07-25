import mongoose from "mongoose";

mongoose.connect("mongodb+srv://robson1992ferreira:1QIvzmcA8ngLJtS1@cluster0.48rzntg.mongodb.net/alura-node")

let db = mongoose.connection

export default db