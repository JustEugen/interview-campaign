import { S } from "./styled";
import { Button } from "../../shared-components/Button/Button";
import { Link } from "react-router-dom";

export const CampaignsPage = () => {
  return (
    <S.Entry>
      <Link to={"/campaign"}>
        <Button>Create campaign</Button>
      </Link>
    </S.Entry>
  );
};

CampaignsPage.S = S;
