import express from 'express';
import { RewardService } from '../../api-modules/reward-api/reward.service';
import { multiEntityRes } from '@utils/multi-entity-res';
import { singleEntityRes } from '@utils/single-entity-res';

const router = express.Router();

const baseUrl = `/api/v1/rewards`;

router.get(`${baseUrl}/`, async (req, res) => {
  const rewards = await RewardService.getAll();

  const dataResponse = multiEntityRes(rewards, rewards.length);

  res.send(dataResponse);
});

router.get(`${baseUrl}/:rewardId`, async (req, res) => {
  const rewardId = +req.params.rewardId;
  const reward = await RewardService.getById(rewardId);

  if (reward === null) {
    res.status(404).send({
      errorCode: 404,
      message: `No reward found`,
    });
    return;
  }

  const dataResponse = singleEntityRes(reward);

  res.send(dataResponse);
});

export const rewardController = router;
