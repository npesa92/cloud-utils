import docClient from '../config';
import { QueryArgs, QueryBuilder } from './QueryBuilder';
import { BatchGetArgs, BatchGetBuilder } from './BatchGetBuilder';

class DynamoClient {

    public async query(args: QueryArgs) {
        const { tableName, hashKey, hashKeyValue } = args;
        const input = new QueryBuilder()
            .setTableName(tableName)
            .setHashKey(hashKey)
            .setHashKeyValue(hashKeyValue)
            .build();
        return await docClient.query(input).promise();
    }

    public async batchGet(args: BatchGetArgs) {
        const { tableName, hashKey, hashKeyValue } = args;
        const input = new BatchGetBuilder()
            .setTableName(tableName)
            .setHashKey(hashKey)
            .setHashKeyValue(hashKeyValue)
            .build();
        return await docClient.batchGet(input).promise();
    }
}

export { DynamoClient };
