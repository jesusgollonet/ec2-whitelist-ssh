const AWS = require('aws-sdk');

module.exports = function(action, groupId, ip, region, cb) {
    AWS.config.update({ region: region });
    const ec2 = new AWS.EC2();
    let ec2fn;
    let params = {
        GroupId: groupId,
        IpPermissions: [
            {
                IpProtocol: 'tcp',
                FromPort: 22,
                ToPort: 22,
                IpRanges: [{ CidrIp: ip + '/32' }]
            }
        ]
    };

    switch (action) {
        case 'remove':
        case 'delete':
            ec2.revokeSecurityGroupIngress(params, cb);
            break;
        case 'add':
            console.log('add!');
            ec2.authorizeSecurityGroupIngress(params, cb);
            break;

        default:
            console.log("i don'nt understand that action");
            break;
    }
};
