import { CampaignRepository } from '../../entity-modules/campaign-entity/campaign.repository';

export class CampaignService {
  static getAll = async () => {
    const campaigns = await CampaignRepository.retrieveAll();

    return campaigns;
  };
}
