// express app
const express = require('express')
const cors= require('cors')

// instantiate the app
const app = express()

// condifgure app so responses
// carry special headers to enable CORS
app.use(cors())

const PORT = 3000

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})