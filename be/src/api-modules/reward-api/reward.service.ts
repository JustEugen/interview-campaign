import { RewardRepository } from '../../entity-modules/reward-entity/reward.repository';

export class RewardService {
  static getAll = async () => {
    return await RewardRepository.retrieveAll();
  };

  static getById = async (id: number) => {
    return await RewardRepository.retrieveById(id);
  };
}
