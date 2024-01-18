const { Response } = require('../models/response.js');
const userService = require('../services/userService.js')

//User
const getUsers = async (req, res, next) => {
    const users = await userService.getUsers();

    res.status(200).send(Response("200", users, {}));
}

module.exports = { getUsers };