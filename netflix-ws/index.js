const express = require('express');
const app = express();

app.get('/', (req,res)=>{
// regras de negócio
res.json({mensagem:'Rota Funcionando'});

});

app.listen(5000, () =>{
    console.log('meu servidor está funcionando');
})