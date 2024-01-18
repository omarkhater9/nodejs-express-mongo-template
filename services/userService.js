const _User = require('../models/user.js');


//User
const getUsers = async (req, res, next) => {
    const users = await _User.find({ status: true })

    return users;
}

module.exports = { getUsers };