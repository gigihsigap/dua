const router = require('./router/router')

const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)

app.listen(PORT, console.log(`Server is live on port ${PORT}`))
