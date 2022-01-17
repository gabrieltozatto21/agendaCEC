const rotasTurmas = require('express').Router()
const TurmaController = require('../controllers/TurmaController')
const PilarController = require('../controllers/PilarController')

rotasTurmas.get('/', async (req, res, prox)=>{
    try {
        const turmas = await TurmaController.listar()

        if(!turmas){
            res.json({erro: erro.message})
        }
        res.json(turmas)
    } catch (error) {
        prox(error)
    }
})

rotasTurmas.get('/:idTurma', async (req, res, prox) =>{
    try {
        const id = req.params.idTurma
        const turma = await TurmaController.pegaIdTurma(id)
        res.json(turma)
    } catch (error) {
        prox(error)
    }
})

rotasTurmas.post('/cadastro', async (req, res) =>{
    const resultado = req.body
    const turma = await TurmaController.criar(resultado)

    if(!turma){
        res.json({erro: erro.message})
    }
    
    res.json(turma)
})


rotasTurmas.put('/atualizar/:idTurma', async (req, res)=>{
    const id = req.params.idTurma
    const informacoesAtualizadas = req.body
    const resposta = await TurmaController.atualizar({...informacoesAtualizadas, id:id})
    res.json(resposta)
})

rotasTurmas.delete('/deletar/:idTurma', async (req, res) => {
    const id = req.params.idTurma;
    const resposta = await TurmaController.deletar(id);
    res.json(resposta)
})

module.exports = rotasTurmas;