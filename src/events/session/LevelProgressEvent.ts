import { IMessageDataWrapper } from '../../api';
import { MessageEvent } from '../../events';

export interface LevelProgressData
{
    level: number;
    experience: number;
    nextLevelXp: number;
    leveledUp: boolean;
}

export class LevelProgressEvent extends MessageEvent
{
    private _data: LevelProgressData;

    constructor(callBack: Function)
    {
        super(callBack, null);
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        this._data = {
            level: wrapper.readInt(),
            experience: wrapper.readInt(),
            nextLevelXp: wrapper.readInt(),
            leveledUp: wrapper.readBoolean()
        };

        return true;
    }

    public get data(): LevelProgressData
    {
        return this._data;
    }
}
