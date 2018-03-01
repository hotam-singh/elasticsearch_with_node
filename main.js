var searchapi = require('./search');

searchapi.searchQuery('mem_accounts', {
    "address": "4995063339468361088E"
}, function(err, resp) {
    console.log('resp : ' + JSON.stringify(resp));
})
