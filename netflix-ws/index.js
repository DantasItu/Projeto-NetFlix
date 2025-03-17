const express = require('express');
const morgan = require ('morgan');
const app = express();

app.use(morgan('dev'));

// regras de negócio
// RECUPERAR TODOS OS REGISTROS
app.get('/', (req,res)=>{
res.json({mensagem:'PEGAR TODOS OS REGISTROS'});
});


// RECUPERAR SOMENTE O  REGISTRO COM O ID ==
app.get('/:id',(req,res)=> {
    const id = req.params.id;
    res.json({mensagem:`pegar somente o registro com o id:${id}`})
});

// CRIAR UM REGISTRO
app.post('/',(req,res)=>{
    const body = req.body;
    res.json({mensagem:"Criar usuario"});
});

// ATUALIZAR SOMENTE O REGISTRO COM ID ==
app.put('/:id',(req,res)=>{
    const id = req.params.id;
res.json({mensagem: `ATUALIZAR SOMENTO O REGISTRO COM O ID: ${id}`})
});


// DELETAR SOMENTE O REGISTRO COM ID ==
app.delete('/:id',(req,res)=>{
    const id = req.params.id;
    res.json({mensagem: `DELETAR SOMENTO O REGISTRO COM O ID: ${id}`})
})

app.listen(5000, () =>{
    console.log('meu servidor está funcionando');
});