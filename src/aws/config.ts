import * as AWS from 'aws-sdk';

const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const endpoint = process.env.ENDPOINT;
// const env = process.env.ENVIRONMENT;

AWS.config.update({
    region: 'us-west-2',
    accessKeyId,
    secretAccessKey,
});

const documentClient = new AWS.DynamoDB.DocumentClient({ endpoint });

export default documentClient;

