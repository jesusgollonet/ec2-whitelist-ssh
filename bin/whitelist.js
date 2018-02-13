#!/usr/bin/env node

const whitelist = require('../lib/ec2-whitelist-ssh');

// args security group, ip, time, region

const args = process.argv.slice(2);

whitelist(...args, (err, data) => {
    if (err) {
        throw err;
    }
    console.log('your ip has been whitelisted');
});
