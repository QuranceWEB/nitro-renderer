import { IMessageDataWrapper, IMessageParser } from '@nitrots/nitro-renderer';

export interface BattlePassLevel
{
    level: number;
    free: any;
    premium: any;
}

export class BattlePassParser implements IMessageParser
{
    public levels: BattlePassLevel[] = [];

    flush(): boolean
    {
        this.levels = [];
        return true;
    }

    parse(wrapper: IMessageDataWrapper): boolean
    {
        const seasonId = wrapper.readInt();
        const levelCount = wrapper.readInt();
        console.log('[DEBUG] BattlePassDataParser.parse CALLED');

        for(let i = 0; i < levelCount; i++)
        {
            const level = wrapper.readInt();

            const free = this.readTrack(wrapper);
            const premium = this.readTrack(wrapper);

            this.levels.push({ level, free, premium });
        }

        return true;
    }

    private readTrack(wrapper: IMessageDataWrapper)
    {
        const hasTrack = wrapper.readBoolean();
        if(!hasTrack) return null;

        return {
            type: wrapper.readString(),
            value: wrapper.readInt(),
            extra: wrapper.readString(),
            claimed: wrapper.readBoolean()
        };
    }
}