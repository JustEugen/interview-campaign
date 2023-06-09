import { Campaign } from './campaign-entity';
import { campaignMock } from './campaign.mock';

export class CampaignRepository {
  static retrieveAll = async (): Promise<Campaign[]> => {
    return campaignMock;
  };
}
