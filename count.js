var client = require('./connection.js');

client.count({index: 'test',type: 'constituencies'},function(err,resp,status) {  
  console.log("constituencies",resp);
});
