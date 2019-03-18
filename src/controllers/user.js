const logger = require('../utils/logger')

const Model = require('../models/user')

exports.get = () =>
    Model.User
        .find({})
        .catch((err) => {
            logger.error(`Error retrieving users: ${err}`)
        })
        
exports.create = user =>
    new Model.User(user)
        .save()
        .then(() => {
            logger.info(`User created: ${user}`)
        })
        .catch((err) => {
            logger.error(`Error creating a user: ${err}`)
        })

exports.remove = user =>
    Model.User
        .deleteOne({ id: user._id })
        .then(() => {
            logger.info(`User deleted: ${user}`)
        })