// var mongodb = require('mongodb');

// //We need to work with "MongoClient" interface in order to connect to a mongodb server.
// var MongoClient = mongodb.MongoClient;

// // Connection URL. This is where your mongodb server is running.
// var url = 'mongodb://localhost:27017/maintainCMU';

// // Use connect method to connect to the Server
// MongoClient.connect(url, function (err, db) {
//   if (err) {
//     console.log('Unable to connect to the mongoDB server. Error:', err);
//   } else {
//     // Connected
//     console.log('Connection established to', url);
//     mongoDB.close();
//   }
// });

// exports.insert = function(collection, query, callback) {
//   console.log("start insert");
//   mongoDB.collection(collection).insert(
//     query,
//     {safe: true},
//     function(err, crsr) {
//       if (err) doError(err);
//       console.log("completed mongo insert");
//       callback(crsr);
//       console.log("done with insert callback");
//     });
//   console.log("leaving insert");
// }

var requests_array = []

var request = {
  addRequest: function(building, roomNum, floorNum, location, description) { // TODO: ADD PHOTO INPUT
    console.log("Here in request.js")
    var r = {'building':building, 'roomNum':roomNum, 'floorNum': floorNum, 'location':location, 'description':description};
    request_array.push(s);
    return request_array;
  }
}

module.exports = request