const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => res.render('about'))

//app.use는 미들웨어와 관련이 있는 메서드.
//라우트가 일치하지 않을 경우 사용할 폴백 핸들러.
app.use((req,res) => {
    res.type('text/plain')
    res.status(404)
    res.render('404')
})

app.use((err, req, res, next) => {
    console.err(err.message)
    res.type('text/plain')
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port};` +
    `press Ctrl-C to terminate`))