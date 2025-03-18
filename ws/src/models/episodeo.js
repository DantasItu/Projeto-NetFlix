import mongoose from "mongoose";

export const Episodeo = mongoose.model('episodeo',{
    temporada_id: {
        type: mongoose.Types.ObjectId,
        ref: 'temporada',
    },
    titulo:String,
    descricao: String,
    numero: Number,
    capa: String,
});