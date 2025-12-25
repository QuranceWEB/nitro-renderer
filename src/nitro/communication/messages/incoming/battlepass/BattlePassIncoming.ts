import { IncomingHeader } from '../IncomingHeader';
import { BattlePassDataEvent } from './BattlePassDataEvent';

export const BattlePassIncoming =
{
    events: new Map<number, Function>([
        [ IncomingHeader.BATTLEPASS_DATA, BattlePassDataEvent ]
    ]),
    composers: new Map<number, Function>()
};