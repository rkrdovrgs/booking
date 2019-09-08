var mongojs = require('mongojs');
var connectionString = process.env.MONGODB_URI || 'merrnn';

module.exports = function (collections) {
    return mongojs(connectionString, collections);
};