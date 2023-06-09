import express from 'express';
import { multiEntityRes } from '@utils/multi-entity-res';
import { SocialService } from '../../api-modules/social-api/social.service';

const router = express.Router();

const baseUrl = `/api/v1/socials`;

router.get(`${baseUrl}/`, async (req, res) => {
  const socials = await SocialService.getAll();

  const dataResponse = multiEntityRes(socials, socials.length);

  res.send(dataResponse);
});

export const socialController = router;
