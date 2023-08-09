import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';
import 'dotenv/config'

const app = express()
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home',{
        name: 'Home',
        title: 'Curso de Node'
    })
})
app.get('/generic', function (req, res) {
    res.render('generic',{
        name: 'Home',
        title: 'Curso de Node'
    })
})

app.get('/elements', function (req, res) {
    res.render('elements',{
        name: 'Home',
        title: 'Curso de Node'
    })
})

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})