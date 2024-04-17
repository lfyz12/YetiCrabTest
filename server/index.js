require('dotenv').config()
const express = require('express')
const db = require('./db')
const models = require('./models/models')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const app = express()


const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', router)

app.use(errorHandler)
const server = require('http').createServer(app)
const start = async () => {
    try {
        await db.authenticate()
        await db.sync({alter: true})

        server.listen(PORT, () => console.log('Server started on port ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

start()