import { BaseEntity } from '../_shared/base-entity';

export interface Reward extends BaseEntity {
  name: string;
  coverImage: string;
  expires_at: string;
}
