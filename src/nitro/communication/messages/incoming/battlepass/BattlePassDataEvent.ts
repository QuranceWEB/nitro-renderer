import { MessageEvent } from '@nitrots/nitro-renderer';
import { BattlePassParser } from '../../parser/battlepass/BattlePassParser';

export class BattlePassDataEvent extends MessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BattlePassParser);
    }

    public getParser(): BattlePassParser
    {
        return this.parser as BattlePassParser;
    }
}
