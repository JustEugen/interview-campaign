import { rewardsMockRecords } from './reward.mock';
import { Reward } from './reward-entity';
export class RewardRepository {
  static retrieveAll = async (): Promise<Reward[]> => {
    return rewardsMockRecords;
  };

  static retrieveById = async (id: number): Promise<Reward | null> => {
    return rewardsMockRecords.find((record) => record.id === id) || null;
  };
}
