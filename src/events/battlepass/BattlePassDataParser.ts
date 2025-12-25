import { IMessageParser, IMessageDataWrapper } from '@nitrots/nitro-renderer';

export interface BattlePassReward
{
    level: number;
    type: string;
    value: string;
    claimed: boolean;
}

export class BattlePassDataParser implements IMessageParser
{
    public level: number = 0;
    public experience: number = 0;
    public nextLevelXp: number = 0;
    public rewards: BattlePassReward[] = [];

    flush(): boolean
    {
        this.rewards = [];
        return true;
    }

    parse(wrapper: IMessageDataWrapper): boolean
    {
        // player progress
        this.level = wrapper.readInt();
        this.experience = wrapper.readInt();
        this.nextLevelXp = wrapper.readInt();

        // rewards
        const rewardCount = wrapper.readInt();

        for(let i = 0; i < rewardCount; i++)
        {
            this.rewards.push({
                level: wrapper.readInt(),
                type: wrapper.readString(),
                value: wrapper.readString(), // string is safe (credits/badge/itemId)
                claimed: wrapper.readBoolean()
            });
        }

        return true;
    }
}