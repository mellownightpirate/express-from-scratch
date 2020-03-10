// express app
const express = require('express')
const cors= require('cors')
const friendsRouter = require(`./friends-router`)

// instantiate the app
const app = express()

// condifgure app so responses
// carry special headers to enable CORS
app.use(cors())
// by default express cannot parse bodies of requests
// we need to opt-in to body-parsing
// and this comes with express
app.use(express.json())

// we connect the router using .use
app.use(friendsRouter)

app.get('/hello', (req, res) => {
    const { pal } = req.query
    res.send(`<h1>Hello, ${pal}!</h1>`)
})

// make me a POST that has the desired name somewhere in the request
// send back???



// kind of life "export default app"
module.exports = app
