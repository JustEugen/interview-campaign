import express from 'express';
import { multiEntityRes } from '@utils/multi-entity-res';
import { CampaignService } from '../../api-modules/campaign-api/campaign..service';

const router = express.Router();

const baseUrl = `/api/v1/campaigns`;

router.get(`${baseUrl}/`, async (req, res) => {
  const campaigns = await CampaignService.getAll();

  const dataResponse = multiEntityRes(campaigns, campaigns.length);

  res.send(dataResponse);
});

export const campaignsController = router;
