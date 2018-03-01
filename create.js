var client = require('./connection.js');

client.indices.create({
    index: 'test'
}, function (err, resp, status) {
    if (err) {
        console.log(err);
    }else {
        console.log("created : ", resp);
    }
});

/* client.indices.create({
    index: 'mem_accounts'
}, function (err, resp, status) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("created : ", resp);
    }
});

client.indices.create({
    index: 'blocks'
}, function (err, resp, status) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("created : ", resp);
    }
});

client.indices.create({
    index: 'dapps'
}, function (err, resp, status) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("created : ", resp);
    }
});

client.indices.create({
    index: 'migrations'
}, function (err, resp, status) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("created : ", resp);
    }
}); */

