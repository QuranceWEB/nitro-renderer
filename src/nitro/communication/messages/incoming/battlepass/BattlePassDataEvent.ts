import { MessageEvent } from '../../../../../events/core/MessageEvent';
import { BattlePassDataParser } from '../../parser/battlepass/BattlePassDataParser';

export class BattlePassDataEvent extends MessageEvent
{
    constructor(callback: (event: BattlePassDataEvent) => void)
    {
        console.log('[NITRO] BattlePassDataEvent constructed');
        super(callback, BattlePassDataParser);
    }
}
