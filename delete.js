var client = require('./connection.js');

client.indices.delete({ index: 'test' }, function (err, resp, status) {
    console.log("index deleted", resp);
});

client.indices.delete({ index: 'peers' }, function (err, resp, status) {
    console.log("index deleted", resp);
});

client.indices.delete({ index: 'etp' }, function (err, resp, status) {
    console.log("delete", resp);
});

client.indices.delete({ index: 'votes' }, function (err, resp, status) {
    console.log("delete", resp);
});

client.indices.delete({ index: 'trs' }, function (err, resp, status) {
    console.log("delete", resp);
});

client.indices.delete({ index: 'stake_orders' }, function (err, resp, status) {
    console.log("delete", resp);
});

client.indices.delete({ index: 'signatures' }, function (err, resp, status) {
    console.log("delete", resp);
});

client.indices.delete({ index: 'migrations' }, function (err, resp, status) {
    console.log("delete", resp);
});

client.indices.delete({ index: 'mem_accounts' }, function (err, resp, status) {
    console.log("delete", resp);
});

client.indices.delete({ index: 'gov' }, function (err, resp, status) {
    console.log("delete", resp);
});

client.indices.delete({ index: 'delegates' }, function (err, resp, status) {
    console.log("delete", resp);
});

client.indices.delete({ index: 'dapps' }, function (err, resp, status) {
    console.log("delete", resp);
});

client.indices.delete({ index: 'blocks' }, function (err, resp, status) {
    console.log("delete", resp);
});
 
client.indices.delete({ index: 'rounds_fees' }, function (err, resp, status) {
    console.log("delete", resp);
}); 
