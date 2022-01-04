const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(cors());

    const rotasUsuarios = require('./routerUsuarios')
    app.use('/professores', rotasUsuarios)

    const rotasAreas = require('./routerAreas')
    app.use('/areas', rotasAreas)

    const rotasTurmas = require('./routerTurmas')
    app.use('/turmas', rotasTurmas)

    const rotasDisciplinas = require('./routerDisciplinas')
    app.use('/disciplinas', rotasDisciplinas)

    const rotaCalendario = require('./routerCalendario')
    app.use('/calendario', rotaCalendario)

    const rotasEventos = require('./routerEventos')
    app.use('/eventos', rotasEventos)

    //rotas pilares para consumir no front
    const rotasPilares = require('./routerPilares')
    app.use('/pilares', rotasPilares)
}