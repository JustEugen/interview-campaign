import { BaseEntity } from '../_shared/base-entity';
import { ActionParam } from '../action-param-entity/action-param.entity';

export interface Action extends BaseEntity {
  name: string;
  socialId: number;
  actionParams: ActionParam[];
}
