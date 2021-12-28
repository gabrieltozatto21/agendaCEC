const rotasTurmas = require('express').Router()
const TurmaController = require('../controllers/TurmaController')
const PilarController = require('../controllers/PilarController')

rotasTurmas.get('/', async (req, res)=>{
    const turmas = await TurmaController.listar()
    const pilares = await PilarController.pegarPilares();

    if(!turmas){
        res.json({erro: erro.message})
    }
    res.render('../api/views/turmas', {
        title: 'Turmas',
        turmas: turmas,
        pilares: pilares
    })
})

rotasTurmas.post('/cadastro', async (req, res) =>{
    const resultado = req.body
    const turma = await TurmaController.criar(resultado)

    if(!turma){
        res.json({erro: erro.message})
    }
    
    res.redirect('/turmas')
})


rotasTurmas.post('/atualizar/:idTurma', async (req, res)=>{
    const id = req.params.idTurma
    const informacoesAtualizadas = req.body
    await TurmaController.atualizar({...informacoesAtualizadas, id:id})
    res.redirect('/turmas')
})

rotasTurmas.get('/deletar/:idTurma', async (req, res) => {
    const id = req.params.idTurma;
    await TurmaController.deletar(id);
    res.redirect('/turmas')
})

module.exports = rotasTurmas;