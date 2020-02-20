import * as AWS from 'aws-sdk';
import { Builder } from './Builder';
import { DEFAULT_LOCALE } from './../constants';

interface BatchGetArgs {
    tableName: string;
    hashKey: string;
    hashKeyValue: string;
}

class BatchGetBuilder extends Builder {

    private get keyMapping() {
        return [
            { [`${this.hashKey}`]: this.hashKeyValue },
            { [`${this.hashKey}`]: DEFAULT_LOCALE },
        ]
    }
    
    public build(): AWS.DynamoDB.DocumentClient.BatchGetItemInput {
        return {
            RequestItems: {
                [this.tableName]: {
                    Keys: this.keyMapping,
                },
            },
        };
    }
}

export { BatchGetArgs, BatchGetBuilder };
