const bodyParser = require('body-parser')

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:false}))
    app.set('view engine', 'ejs')

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

    // app.locals.teste = 1+1;
    const rotasEventos = require('./routerEventos')
    app.use('/', rotasEventos)
}