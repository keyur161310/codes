const { MongoClient } = require('mongodb');
var url = "mongodb://localhost:27017/";
var dbName = "mogodb"; //database must be exists
var client = new MongoClient(url);
var dbPromise = client.connect().then(() => {
    console.log('database connected...');
    return client.db(dbName);
}).catch((error) => {
    console.log('Error ' + error);
    return error;
});
module.exports = {dbPromise};