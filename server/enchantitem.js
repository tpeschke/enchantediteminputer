const { connection } = require('./server-config')
    , express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
const addCtrl = require('./addController')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

app.post('/api/addEnchantedItem', addCtrl.addEnchantedItem)

const root = require('path').join(__dirname, '../build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

massive(connection).then(dbI => {
    app.set('db', dbI)
    app.listen(3535, _ => {
        console.log(`I cannot see, I cannot feel, I cannot hope or cry. All I know is pain and ill, and only wish to die 3535`)
    })
})