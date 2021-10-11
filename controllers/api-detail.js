const posts = require('../data/login.json');

const getAll = (req, res) => {
    return res.status(200).json({
        code:200,
        message: 'Success get all post',
        data: posts || null,
        error: null
    })
}

module.exports = {
    getAll
}