const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
const handlers = require('./lib/handlers')

const fortune = require('./lib/fortune')

app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', handlers.home)

app.get('/about', handlers.about)

//app.use는 미들웨어와 관련이 있는 메서드.
//라우트가 일치하지 않을 경우 사용할 폴백 핸들러.
app.use(handlers.notFound)

app.use(handlers.serverError)

app.listen(port, () => console.log(
    `Express started on http://localhost:${port};` +
    `press Ctrl-C to terminate`))