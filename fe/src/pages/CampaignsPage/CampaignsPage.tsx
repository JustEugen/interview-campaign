import { S } from "./styled";
import { Button } from "../../shared-components/Button/Button";
import { Link } from "react-router-dom";
import { PageTitle } from "../../shared-components/PageTitle/PageTitle";
// @ts-ignore
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
// @ts-ignore
import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg";
import { Campaign } from "../../shared-components/Campaign/Campaign";
import { Input } from "../../shared-components/Input/Input";

export const CampaignsPage = () => {
  return (
    <S.Entry>
      <S.Header>
        <PageTitle title={"Campaigns"} />
        <S.DataFilteringWrapper>
          <Input name={"search"} placeholder={"Search"} />
          <Button variant={"outlined"} icon={<ArrowDown />}>
            Filter
          </Button>
          <Button asLink={{ to: "/campaign/details" }} icon={<PlusIcon />}>
            Create Campaign
          </Button>
        </S.DataFilteringWrapper>
      </S.Header>
      <S.List>
        <Campaign />
        <Campaign />
        <Campaign />
        <Campaign />
      </S.List>
    </S.Entry>
  );
};

CampaignsPage.S = S;
