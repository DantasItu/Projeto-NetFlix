import mongoose from 'mongoose';


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


