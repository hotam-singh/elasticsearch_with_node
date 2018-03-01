/* var client = require('./connection.js');

client.delete({
    index: 'etp',
    id: 'VLal_WAB5JQDjUe_Aa6L',
    type: 'mem_accounts'
}, function (err, resp, status) {
    console.log(resp);
}); */

var client = require('./connection.js');

client.delete({
    index: 'etp',
    id: '1',
    type: 'users'
}, function (err, resp, status) {
    console.log(resp);
});