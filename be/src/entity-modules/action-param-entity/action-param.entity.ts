import { BaseEntity } from '../_shared/base-entity';

export interface ActionParam extends BaseEntity {
  name: string;
  actionId: number;
}
