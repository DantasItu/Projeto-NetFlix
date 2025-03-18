import express, { request } from 'express';
import {db, URI} from '../../api/connectMdb.js';
import { Filme } from '../models/filme.js';

const routes = express.Router();

// regras de negócio
// RECUPERAR TODOS OS REGISTROS
routes.get('/', (req,res)=>{
    res.json({mensagem:'PEGAR TODOS OS REGISTROS S2'});
    });
    
    
    // RECUPERAR SOMENTE O  REGISTRO COM O ID ==
    routes.get('/:id',(req,res)=> {
        const id = req.params.id;
        res.json({mensagem:`pegar somente o registro com o id:${id}`})
    });
    
    // CRIAR UM REGISTRO
    routes.post('/',async (req,res)=>{
        const body = req.body;
        await
        res.json(body);
    });
    
    // ATUALIZAR SOMENTE O REGISTRO COM ID ==
    routes.put('/:id',(req,res)=>{
        const id = req.params.id;
    res.json({mensagem: `ATUALIZAR SOMENTO O REGISTRO COM O ID: ${id}`})
    });
    
    
    // DELETAR SOMENTE O REGISTRO COM ID ==
    routes.delete('/:id',(req,res)=>{
        const id = req.params.id;
        res.json({mensagem: `DELETAR SOMENTO O REGISTRO COM O ID: ${id}`})
    })

    export default routes;