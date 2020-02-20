interface IBuilder {
    _tableName: string | undefined;
    _hashKey: string | undefined;
    _hashKeyValue: string | undefined;
}

class Builder implements IBuilder{
    public _tableName: string | undefined;
    public _hashKey: string | undefined;
    public _hashKeyValue: string | undefined;

    constructor() {
        this._tableName = undefined;
        this._hashKey = undefined;
        this._hashKeyValue = undefined;
    }

    public setTableName(tableName: string) {
        this._tableName = tableName;
        return this;
    }

    public setHashKey(key: string) {
        this._hashKey = key;
        return this;
    }

    public setHashKeyValue(value: string) {
        this._hashKeyValue = value;
        return this;
    }

    public get tableName() {
        if (!this._tableName) throw new Error('No Table Name');
        return this._tableName;
    }

    public get hashKey() {
        if (!this._hashKey) throw new Error('No HashKey');
        return this._hashKey;
    }

    public get hashKeyValue() {
        if (!this._hashKeyValue) throw new Error('No HashKey Value');
        return this._hashKeyValue;
    }
}

export { Builder };
