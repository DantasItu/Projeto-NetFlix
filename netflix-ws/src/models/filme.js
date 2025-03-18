// import { db, URI } from "../../api/connectMdb"
import mongoose from 'mongoose';
// const mongoose = request('mongoose');

export const Filme = mongoose.model('filme',{
    titulo: String,
    atores: Array,
    ano: Number,
    detalhes: Object,
    premiacoes: [Object],
});


