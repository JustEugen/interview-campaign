import { useEffect, useState } from "react";
import { MultiEntityRes } from "../../api/shared/multi-entity-res";
import { Reward as RewardModel } from "../../api/rewards-api/reward.model";
import { RewardsApiService } from "../../api/rewards-api/rewards-api.service";
import { S } from "./styled";
import { Reward } from "./componenets/Reward/Reward";

export const CampaignRewardsPage = () => {
  const [rewards, setRewards] = useState<MultiEntityRes<RewardModel> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const { data } = await RewardsApiService.getAllRewards();

        setRewards(data);
      } catch (err) {
        console.log("error: ", err);
      }
      setLoading(false);
    })();
  }, []);

  const addRewardToCampaign = (reward: RewardModel) => {};

  return (
    <S.Entry>
      <S.Loader $visible={loading}>loading...</S.Loader>
      {rewards && (
        <S.List>
          {rewards.entities.map((reward) => (
            <Reward key={reward.id} reward={reward} onAdd={addRewardToCampaign} />
          ))}
        </S.List>
      )}
    </S.Entry>
  );
};
