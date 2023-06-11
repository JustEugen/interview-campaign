import {S} from "./styled";
import {Step} from "../../CreateCampaignLayout";

type Props = {
  activeItem: Step;
};

export const CreateCampaignSideBar = (props: Props) => {
  return (
    <S.Entry>
      <S.Item $active={props.activeItem === Step.Details}>
        <S.ItemHeader>
          <S.Text>1</S.Text>
          <S.Text>Campaign Details</S.Text>
        </S.ItemHeader>
      </S.Item>
      <S.Item $active={props.activeItem === Step.Actions}>
        <S.ItemHeader>
          <S.Text>2</S.Text>
          <S.Text>Actions</S.Text>
        </S.ItemHeader>
      </S.Item>
      <S.Item $active={props.activeItem === Step.Rewards}>
        <S.ItemHeader>
          <S.Text>3</S.Text>
          <S.Text>Rewards</S.Text>
        </S.ItemHeader>
      </S.Item>
      <S.Item $active={props.activeItem === Step.Review}>
        <S.ItemHeader>
          <S.Text>4</S.Text>
          <S.Text>Review</S.Text>
        </S.ItemHeader>
      </S.Item>
    </S.Entry>
  );
};

CreateCampaignSideBar.S = S;
