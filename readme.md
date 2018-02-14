# EC2 Whitelist ssh

A small utility to add or remove ssh access to a given ip in amazon ec2.

Handy when: 

- You want to only allow ssh access to specific ip/s to ec2 instances.
- You don't have a static ip
- You work from random networks, cafes, tethering, home...

### Assumptions

- A security group attached to your ec2 instance. You know the group id 
  (usually something like `sg-1234l...`) and the region where it lives.
- AWS credentials with access to that security group.

### Usage

```
./bin/whitelist.js add [or remove] security-group-name ip-to-add region
```
(proper binary coming soon)

