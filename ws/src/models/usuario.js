import mongoose from "mongoose";

export const Usuario = mongoose.model('usuario', {
    nome: String,
    email: String,
    senha: String,
});