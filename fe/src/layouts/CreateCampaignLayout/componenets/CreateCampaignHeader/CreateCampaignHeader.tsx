import { S } from "./styled";
import { Link } from "react-router-dom";

type Props = {
  link: string;
  name: string;
};

export const CreateCampaignHeader = (props: Props) => {
  return (
    <S.Entry>
      <Link to={props.link}>{props.name}</Link>
    </S.Entry>
  );
};

CreateCampaignHeader.S = S;
