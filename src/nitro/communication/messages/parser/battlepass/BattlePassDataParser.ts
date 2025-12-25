import { IMessageParser } from '../../../../../api/communication/IMessageParser';
import { IMessageDataWrapper } from '../../../../../api/communication/IMessageDataWrapper';

export class BattlePassDataParser implements IMessageParser
{
    public level = 0;
    public experience = 0;
    public nextLevelXp = 0;

    flush(): boolean
    {
        return true;
    }

    parse(wrapper: IMessageDataWrapper): boolean
    {
        console.log('[NITRO] BattlePassDataParser.parse HIT');

        this.level = wrapper.readInt();
        this.experience = wrapper.readInt();
        this.nextLevelXp = wrapper.readInt();

        return true;
    }
}
