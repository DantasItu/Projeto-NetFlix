import mongoose from "mongoose";

export const Temporada = mongoose.model('temporada', {
    filme_id:{
        type: mongoose.Types.ObjectId,
        ref: 'filme',
    },
    titulo: String,
});