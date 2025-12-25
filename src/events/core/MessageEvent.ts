import { IMessageEvent } from '../../api/communication/IMessageEvent';
import { IMessageParser } from '../../api/communication/IMessageParser';
import { IConnection } from '../../api/communication/IConnection';

export class MessageEvent implements IMessageEvent
{
    protected _callBack: Function | null;
    protected _parserClass: { new(): IMessageParser } | null;
    protected _parser: IMessageParser | null;
    protected _connection: IConnection | null;

    constructor(callBack: Function, parser: { new(): IMessageParser })
    {
        this._callBack = callBack;
        this._parserClass = parser;
        this._parser = null;
        this._connection = null;
    }

    public dispose(): void
    {
        this._callBack = null;
        this._parserClass = null;
        this._parser = null;
        this._connection = null;
    }

    public get callBack(): Function | null
    {
        return this._callBack;
    }

    public get parserClass(): { new(): IMessageParser } | null
    {
        return this._parserClass;
    }

    public get parser(): IMessageParser | null
    {
        return this._parser;
    }

    public set parser(parser: IMessageParser)
    {
        this._parser = parser;
    }

    public get connection(): IConnection | null
    {
        return this._connection;
    }

    public set connection(connection: IConnection)
    {
        this._connection = connection;
    }
}
