const Express = require('express')
const mongoose = require('mongoose')
const Form = require('./dbModel')
const multer = require('multer');


const Cors = require('cors');
const { response } = require('express');


//App config
const app = Express();
const port = process.env.PORT || 8001

const connection_url = `mongodb+srv://admin:qt8LCawurdSbBfq9@cluster0.wnci4.mongodb.net/<Form>?retryWrites=true&w=majority`



//Middlewares
app.use(Express.json())
app.use(Cors())






//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,


})


//API endpoints

app.get('/', (req, res) => res.status(200).send('hello sir'))

// app.get('/',(req,res) =>
//     res.status(200).send("Hello World")

// )

app.post('/login', (req, res) => {
    const form = req.body;
    Form.create(form, (err, data) => {
        if (err) {

            res.status(500).send(err)
        }
        else {

            res.status(200).send(data)
        }
    })

})











//Listener

app.listen(port, () => console.log(`listening on loclahost: ${port}`));











//qt8LCawurdSbBfq9


//mongodb+srv://admin:<password>@cluster0.wnci4.mongodb.net/<dbname>?retryWrites=true&w=majority
