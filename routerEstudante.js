    const express= require ('express')
    const router= express.Router()

    const adicionarEstudante= require('./adicionarEstudante')
    router.post ('/', adicionarEstudante)

    const listarEstudante= require('./listarEstudante')
    router.get ('/', listarEstudante)

    const atualizarEstudante= require('./atualizarEstudante')
    router.put ('/:id', atualizarEstudante)

    const removerEstudante= require ('./removerEstudante')
    router.delete ('/:id', removerEstudante)

    module.exports= router