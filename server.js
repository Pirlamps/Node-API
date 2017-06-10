
const port = 3000

require('./custom-express.js').listen(port, function () {
    console.log(`Servidor escutando em http:localhost:${port} !`)
})
