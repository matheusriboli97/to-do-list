const express = require ('express')
const checkListRouter = require('./src/routes/checklist')

const app = express()
app.use(express.json()) 

app.use('/checklists',checkListRouter) // Coloco o /checklists aqui e não preciso colocar no routes, Isso é um middleware! Todo app.use() recebe como param um middleware, ali em cima inclusive express.json() é um 

app.listen(3000, () => {
    console.log("Servidor iniciado!")
})

