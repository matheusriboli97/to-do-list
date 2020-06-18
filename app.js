const express = require ('express')
const path = require('path')
const checkListRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/task')
const rootRouter = require('./src/routes/index')
const methodOverride = require('method-override')
require('./config/database')


const app = express()
app.use(express.json()) 
app.use(express.urlencoded({extended: true})) // Permite que pegue dados da url
app.use(methodOverride('_method', {methods: ['POST', 'GET']})) // Método que permite enviar formulario interno com put e delete também, coisa que o html5 nao permite por padrão, atua sobre o post e o get pq eu deixei explicito
app.use(express.static(path.join(__dirname, 'public'))) //Arquivos estáticos vão ficar na pasta public
app.set('views', path.join(__dirname, 'src/views')) //Estou dizendo que as views estão em src/views
app.set('view engine', 'ejs')

app.use('/',rootRouter) // Coloco o /checklists aqui e não preciso colocar no routes, Isso é um middleware! Todo app.use() recebe como param um middleware
app.use('/checklists',checkListRouter)
app.use('/checklists',taskRouter.checklistDependent)
app.use('/tasks', taskRouter.simple)

app.listen(3000, () => {
    console.log("Servidor iniciado!")
})

