import { BaseEntity } from '../_shared/base-entity';
import { Action } from '../action-entity/action.entity';

// Social should have a many-to-many relation with campaign
export interface Social extends BaseEntity {
  // If we need to have some specific logic to track if user did some action or now, it could make sense to keep this
  //  as enum and be more code specific thing than something we can add in a few click from admin page, but cannot give
  //  right answer for now, not enough information
  name: string;
  actions: Action[];
}
