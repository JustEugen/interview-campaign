import { S } from "./styled";
import { Link } from "react-router-dom";
// @ts-ignore
import { ReactComponent as BackArrowIcon } from "../../../../assets/back-arrow.svg";
// @ts-ignore
import { ReactComponent as CloseIcon } from "../../../../assets/close.svg";

type Props = {
  link: string;
  name: string;
};

export const CreateCampaignHeader = (props: Props) => {
  return (
    <S.Entry>
      <S.BackWrapper to={props.link}>
        <S.BackIcon>
          <BackArrowIcon />
        </S.BackIcon>
        <S.Text>{props.name}</S.Text>
      </S.BackWrapper>
      <S.CloseWrapper to={"/dashboard/campaigns"}>
        <S.CloseIcon>
          <CloseIcon />
        </S.CloseIcon>
        <S.Text>Exit</S.Text>
      </S.CloseWrapper>
    </S.Entry>
  );
};

CreateCampaignHeader.S = S;
