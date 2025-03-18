// import { db, URI } from "../../api/connectMdb"
import mongoose from 'mongoose';
// const mongoose = request('mongoose');

export const Filme = mongoose.model('filme',{
    titulo: {
        type: String,
        required: true,
    },
    atores: Array,
    ano: Number,
    detalhes: Object,
    premiacoes: [Object],
});


