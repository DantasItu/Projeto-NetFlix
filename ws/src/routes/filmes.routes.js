import express, { request, response } from "express";
import { Filme } from "../models/filme.js";

const routes = express.Router();

// regras de negócio
// RECUPERAR TODOS OS REGISTROS
routes.get("/", async (req, res) => {
 try{
   const filmes = await Filme.find({});
   res.json({error: false, filmes})
 }catch(err) {
  res.json({ error: true, message: err.message });
 }
 
});

// RECUPERAR SOMENTE O  REGISTRO COM O ID ==
routes.get("/:id",async (req, res) => {

try{
  const id = req.params.id;
  const filme = await Filme.findById(id);
  res.json({error: false, filme});
}catch(err){
  res.json({ error: true, message: err.message });
}
});

// CRIAR UM REGISTRO
routes.post("/", async (req, res) => {
  try {
    const filme = req.body;
    const response = await new Filme(filme).save();
   res.json({ error: false, filme: response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

// ATUALIZAR SOMENTE O REGISTRO COM ID ==
routes.put("/:id", async (req, res) => {
  try{
    const filme = req.body;
    const id = req.params.id;
    const filmeUpdate = await Filme.findByIdAndUpdate(id, filme);
    res.json({error: false, message:`o filme do id:${id} foi atualizado com sucesso`, Array: filmeUpdate});   

  }catch(err){
    res.json({ error: true, message: err.message });
  }
});

// DELETAR SOMENTE O REGISTRO COM ID ==
routes.delete("/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const deleteFilme = await Filme.findByIdAndDelete(id);
    res.json({error: false, message: `O filme com id:${id} foi deletado com sucesso!`})
  }catch(err){
    res.json({ error: true, mensagem: err.message });
  }
});

export default routes;
