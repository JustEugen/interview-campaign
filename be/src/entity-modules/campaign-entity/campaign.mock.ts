import { Campaign } from './campaign-entity';
import { rewardsMockRecords } from '../reward-entity/reward.mock';
import { actionMock } from '../action-entity/action.mock';

export const campaignMock: Campaign[] = [
  {
    id: 1,
    name: 'Early Adopter Reward Campaign',
    description: 'This ability of quibits to exist in multiple states simultaneously is called superposition.',
    startDate: '2023-07-08T21:41:05Z',
    endDate: '2023-20-08T21:41:05Z',
    createdAt: '2023-05-08T21:41:05Z',
    updatedAt: '2023-05-08T21:41:05Z',
    rewards: [rewardsMockRecords[0], rewardsMockRecords[1], rewardsMockRecords[2]],
    actions: [actionMock[0]],
  },
];
