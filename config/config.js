/* initializing the database with connect, get and close functions
to be utilized by other files

*/
var MongoClient = require('mongodb').MongoClient;
var state = {
  db: null
};
// connect acccepts a parameter of url which is specified in another file
exports.connect = function(url,done){
  if(state.db) return done()

 MongoClient.connect(url, function(err, database){
  if (err) {return done(err)}
  state.db = database;
  done();
})
}

exports.get= function(){
  return state.db;
}
exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}
