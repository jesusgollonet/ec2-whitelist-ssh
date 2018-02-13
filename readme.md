# EC2 Whitelist ssh

A small utility to add or remove ssh access to a given ip to a given security group in amazon ec2.

Handy when you

- You want to only allow ssh access to your instances to a specific ip/s.
- You don't have a static ip
- You work from random networks, cafes, tethering, home...

### Assumptions

- A security group attached to your ec2 instance. You need to know the id for
  the group (it's usually something like `sg-1234lk0f00`) and the region where
  it lives
- AWS credentials with access to that security group in place

### Usage

```
./bin/whitelist.js add [or remove] security-group-name ip-to-add region
```
(proper binary coming soon)

