const AWS = require('aws-sdk');

module.exports = function(groupId, ip, region, cb) {
    AWS.config.update({ region: region });
    const ec2 = new AWS.EC2();

    ec2.authorizeSecurityGroupIngress(
        {
            GroupId: groupId,
            IpPermissions: [
                {
                    IpProtocol: 'tcp',
                    FromPort: 22,
                    ToPort: 22,
                    IpRanges: [{ CidrIp: ip + '/32' }]
                }
            ]
        },
        cb
    );
};
