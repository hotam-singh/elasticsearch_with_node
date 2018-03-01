
/* var client = require('./connection.js');

client.count({ index: 'mem_accounts', type: 'mem_accounts' }, function (err, resp, status) {
  console.log("constituencies", resp);
}); 


var client = require('./connection.js');

client.count({ index: 'etp', type: 'users' }, function (err, resp, status) {
  console.log("response :", resp);
}); */

var client = require('./connection.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});
