var net = require('net');
var events = require('events');

//Gives us global access to everything we need for each hashing algorithm
require('./algoProperties.js');

var pool = require('./pool.js');

exports.daemon = require('./daemon.js');
exports.varDiff = require('./varDiff.js');


exports.createPool = function(poolOptions, authorizeFn){

    if(poolOptions.OLD === true)
    {
    pool = require('./pool_O.js');
    }
    else
    {
    pool = require('./pool_N.js');
    }

    var newPool = new pool(poolOptions, authorizeFn);
    return newPool;
};
