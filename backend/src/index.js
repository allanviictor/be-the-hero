const express = require('express')
const routes = require('./router')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333)

/*
    ** Metodos HTTP **
** GET: Buscas uam informação no backend
** POST: Criar um informação no backend
** PUT: alterar uma informação no backend
** DDELETE: deletar uma informação no backend

*/

/*
    ** tipos de parametros **
** query params: parametros nomeados enviados na rota apos "?" (filtro, paginação)
** route params: parametros utilizados para identificar recursos
** request body: corpo da requisição utilizado para criar ou alterar recursos

*/
