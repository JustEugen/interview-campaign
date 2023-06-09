import 'module-alias/register';
import express from 'express';
import bodyParser from 'body-parser';
import { APP_PORT } from './env-config';
import { rewardController } from './view-modules/reward/reward.controller';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { campaignsController } from './view-modules/campaign/campaign.controller';
import { socialController } from './view-modules/social/social.controller';

dayjs.extend(utc);

const app = express();

async function main() {
  await new Promise((resolve) => {
    app.listen(APP_PORT || process.env.PORT, () => {
      console.log(`App is running on port: ${APP_PORT}`);
      resolve('Ok');
    });
  });

  app.use(bodyParser.json());
  app.use(rewardController);
  app.use(socialController);
  app.use(campaignsController);
}

main();
