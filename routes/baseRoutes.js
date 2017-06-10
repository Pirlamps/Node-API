function setBaseRoutes(app) {
    app.get('/', (req,res) =>  res.render('index') )
}

module.exports = setBaseRoutes