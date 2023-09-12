//initial code for attach a policy to a bucket

const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3({ region: 'us-east-1' });
const bucketName = 'jipx-2023-09-12';

const policyFile = fs.readFileSync('/home/ec2-user/environment/website_security_policy.json', 'utf8');

const params = {
  Bucket: bucketName,
  Policy: policyFile
};

s3.putBucketPolicy(params, (err, data) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Policy uploaded successfully.');
  }
});
