import { S } from "./styled";
import { Input } from "../../shared-components/Input/Input";

export const CampaignDetailsPage = () => {
  return (
    <S.Entry>
      <S.InputList>
        <Input
          title={"Campaign Name"}
          description={"What is the name of this campaign?"}
          placeholder={"Eg. Like I Used To 100x Campaign"}
        />
        <Input
          title={"Description"}
          description={"Describe this campaign to your listeners. How does it work?"}
          placeholder={"How does this campaign work?"}
        />
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "32px"}}>
          <Input
            title={"Start Date"}
            placeholder={"dd/mm/yyyy"}
          />
          <Input
            title={"End Date"}
            placeholder={"dd/mm/yyyy"}
          />
        </div>
      </S.InputList>
    </S.Entry>
  );
};
