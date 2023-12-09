controllerFunctions = {
    addEnchantedItem: (req, res) => {
        const db = req.app.get('db')
        const { name, description, itemcategory, power, price, history, major, size } = req.body
        db.add(name, description, itemcategory, power, price, history, major, size).then(result => {
            res.send({updated: true})
        })
    }
}

module.exports = controllerFunctions