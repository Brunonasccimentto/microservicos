const express = require('express');
const Routers = require("./router/Routers")
const cors = require("cors")
const app = express()
const multer = require("multer")
const upload = multer()
const port = 3001

app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use('/cliente', upload.any() ,Routers)

app.listen(port, () => console.log(`app listening on port ${port}!`))

