var client = require('./connection.js');

client.delete({
    index: 'test',
    id: '1',
    type: 'constituencies',
    body: {
        "ConstituencyName": "Ipswich",
        "ConstituencyID": "E14000761",
        "ConstituencyType": "Borough",
        "Electorate": 74499,
        "ValidVotes": 48694,
    }
}, function (err, resp, status) {
    console.log('1111111111111:' + resp);
}); 

/* client.index({
    index: 'ETP',
    id: '1',
    type: 'users',
    body: {
        "username":'hotam',
        "status":1,
        "isDelegate":0,
        "u_isDelegate":0,
        "secondSignature":0,
        "u_secondSignature":0,
        "u_username":null,
        "address":"15546849747111093123E",
        "publicKey":null,
        "secondPublicKey":null,
        "balance":"5000000000000",
        "u_balance":"5000000000000",
        "vote":"0",
        "rate":"0",
        "delegates":null,
        "u_delegates":null,
        "multisignatures":null,
        "u_multisignatures":null,
        "multimin":0,
        "u_multimin":0,
        "multilifetime":0,
        "u_multilifetime":0,
        "blockId":"7807109686729042739",
        "nameexist":0,
        "u_nameexist":0,
        "producedblocks":0,
        "missedblocks":0,
        "fees":"0",
        "rewards":"0",
        "acc_type":0,
        "transferedAmount":"0",
        "endTime":null,
        "totalFrozeAmount":"0",
        "virgin":1
    }
}, function (err, resp, status) {
    console.log('error : ' + err);
    console.log('resp :' + resp);
    console.log('status :' + status);
}); */ 


