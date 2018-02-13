#!/usr/bin/env node

const whitelist = require('../lib/whitelist-ip-ssh-ec2');

// args security group, ip, region

const args = process.argv.slice(2);

whitelist(...args, (err, data) => {
    if (err) {
        throw err;
    }
    console.log('your ip has been whitelisted');
});
