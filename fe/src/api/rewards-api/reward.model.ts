import { Base } from "../shared/base.model";

export interface Reward extends Base {
  name: string;
  coverImage: string;
  expires_at: string;
}
