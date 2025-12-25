import { IMessageParser } from './IMessageParser';
import { IConnection } from './IConnection';

export interface IMessageEvent
{
    get callBack(): Function | null;
    get parser(): IMessageParser | null;
    get connection(): IConnection | null;
}
