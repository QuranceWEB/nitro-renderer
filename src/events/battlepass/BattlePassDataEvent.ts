import { IMessageEvent, MessageEvent } from '@nitrots/nitro-renderer';
import { BattlePassDataParser } from '@nitrots/nitro-renderer/src/events/battlepass/BattlePassDataParser';

export class BattlePassDataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: (event: BattlePassDataEvent) => void)
    {
        super(callBack, BattlePassDataParser);
    }

    getParser(): BattlePassDataParser
    {
        return this.parser as BattlePassDataParser;
    }
}
