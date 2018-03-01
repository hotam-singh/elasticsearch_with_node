var client = require('./connection.js');

var client = require('./connection.js');

client.search({  
  index: 'mem_accounts',
  type: 'mem_accounts',
  body: {
    query: {
      match: { "address": "4995063339468361088E" }
    },
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      console.log("--- Response ---");
      console.log(response);
      console.log("--- Hits ---");
      response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
    }
});

/*client.search({  
  index: 'test',
  type: 'constituencies',
  body: {
    query: {
      match: { "constituencyname": "Harwich" }
    },
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      console.log("--- Response ---");
      console.log(response);
      console.log("--- Hits ---");
      response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
    }
});*/

/*exports.searchQuery = function (index, queryMatch, cb) {
  client.search({
    index: index,
    type: index,
    body: {
      query: {
        match: queryMatch
      },
    }
  }, function (error, response, status) {
    if (error) {
      //console.log("search error: "+error)
      cb(error);
    }
    else {
      cb(null, response.hits.hits);
    }
  });
};*/



