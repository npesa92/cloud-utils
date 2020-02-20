import * as AWS from 'aws-sdk';
import { Builder } from './Builder';

interface QueryArgs {
    tableName: string;
    hashKey: string;
    hashKeyValue: string;
}

class QueryBuilder extends Builder {

    private get keyConditonExpression() {
        return `#${this.hashKey} = :${this.hashKey}`;
    }

    private get expressionAttrributeNames() {
        return { [`#${this.hashKey}`]: this.hashKey };
    }

    private get expressionAttributeValues() {
        return { [`:${this.hashKey}`]: this.hashKeyValue };
    }

    private get attrributeSelection() {
        return 'ALL_ATTRIBUTES';
    }

    public build(): AWS.DynamoDB.DocumentClient.QueryInput {
        return {
            TableName: this.tableName,
            KeyConditionExpression: this.keyConditonExpression,
            ExpressionAttributeNames: this.expressionAttrributeNames,
            ExpressionAttributeValues: this.expressionAttributeValues,
            Select: this.attrributeSelection,
        };
    }
}

export { QueryArgs, QueryBuilder };

