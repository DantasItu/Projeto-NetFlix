import mongoose from 'mongoose';


export const Filme = mongoose.model('filme',{
    titulo: {
        type: String,
        required: true,
    },
    tipo: String,
    capa: String,
    logo: String,
    thumb: String,
    descricao: String,
    generos: Array,
    elenco: Array,
    cenas_momentos: Array,
});


