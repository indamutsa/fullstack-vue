const { User } = require('../models')

//If the user is registered, we will not create another 
module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body);
            res.send(user.toJSON())
        } catch (error) {
            res.status(400).send({
                error: 'This email account is already in use'
            })
        }
    }
}