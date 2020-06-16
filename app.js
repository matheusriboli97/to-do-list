const express = require ('express')
const path = require('path')

const checkListRouter = require('./src/routes/checklist')
const rootRouter = require('./src/routes/index')

require('./config/database')


const app = express()
app.use(express.json()) 
app.use(express.urlencoded({extended: true})) // Permite que pegue dados da url
app.use(express.static(path.join(__dirname, 'public'))) //Arquivos estáticos vão ficar na pasta public
app.set('views', path.join(__dirname, 'src/views')) //Estou dizendo que as views estão em src/views
app.set('view engine', 'ejs')

app.use('/',rootRouter) // Coloco o /checklists aqui e não preciso colocar no routes, Isso é um middleware! Todo app.use() recebe como param um middleware, ali em cima inclusive express.json() é um 
app.use('/checklists',checkListRouter)

app.listen(3000, () => {
    console.log("Servidor iniciado!")
})

