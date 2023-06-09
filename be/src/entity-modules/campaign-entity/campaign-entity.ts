import { BaseEntity } from '../_shared/base-entity';
import { Reward } from '../reward-entity/reward-entity';
import { Action } from '../action-entity/action.entity';

export interface Campaign extends BaseEntity {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  rewards: Reward[];
  actions: Action[];
}
