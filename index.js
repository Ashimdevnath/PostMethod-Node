const express = require('express')
require("../Database/connetct")
const student = require("../modules/student")
const app = express()
app.use(express.json())
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/student', (req, res) => {
    console.log(req.body)
    const user  = new student(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch(err => {
        res.status(400).send(err)
    });
})


app.listen(port, () =>{

 console.log(`Example app listening on port ${port}!`)

})