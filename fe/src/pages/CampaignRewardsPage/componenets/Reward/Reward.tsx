import { S } from "./styled";
import { Reward as RewardModel } from "../../../../api/rewards-api/reward.model";
import { Button } from "../../../../shared-components/Button/Button";

type Props = {
  reward: RewardModel;
  onAdd: (reward: RewardModel) => void;
};

export const Reward = (props: Props) => {
  return (
    <S.Entry>
      <S.ImageWrapper>
        <img src={props.reward.coverImage} />
      </S.ImageWrapper>
      <S.Content>
        <div>{props.reward.name}</div>
        <div>Ends on {props.reward.expires_at}</div>
      </S.Content>
      <S.Actions>
        <Button onClick={() => props.onAdd(props.reward)}>Add</Button>
      </S.Actions>
    </S.Entry>
  );
};
