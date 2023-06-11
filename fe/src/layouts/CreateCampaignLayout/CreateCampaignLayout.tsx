import { S } from "./styled";
import { CreateCampaignHeader } from "./componenets/CreateCampaignHeader/CreateCampaignHeader";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { CampaignDetailsPage } from "../../pages/CampaignDetailsPage/CampaignDetailsPage";
import { CampaignActionsPage } from "../../pages/CampaignActionsPage/CampaignActionsPage";
import { CampaignRewardsPage } from "../../pages/CampaignRewardsPage/CampaignRewardsPage";
import { CampaignReviewPage } from "../../pages/CampaignReviewPage/CampaignReviewPage";
import { Button } from "../../shared-components/Button/Button";
import { CreateCampaignSideBar } from "./componenets/CreateCampaignSideBar/CreateCampaignSideBar";
import { PageTitle } from "../../shared-components/PageTitle/PageTitle";

export enum Step {
  Details = "Details",
  Actions = "Actions",
  Rewards = "Rewards",
  Review = "Review",
}

export const CreateCampaignLayout = () => {
  const location = useLocation();

  console.log("location: ", location);

  const getCurrentStep = (): Step => {
    const latestPathName = location.pathname.split("/").reverse()[0];

    if (latestPathName === "details") {
      return Step.Details;
    } else if (latestPathName === "actions") {
      return Step.Actions;
    } else if (latestPathName === "rewards") {
      return Step.Rewards;
    }

    return Step.Review;
  };

  const stepContentMapper = {
    [Step.Details]: {
      buttonText: "Next",
      ownLink: "details",
      nextLink: "actions",
      titleText: "Details",
    },
    [Step.Actions]: {
      buttonText: "Next",
      ownLink: "actions",
      nextLink: "rewards",
      titleText: "Actions",
      prev: Step.Details,
    },
    [Step.Rewards]: {
      buttonText: "Next",
      ownLink: "rewards",
      nextLink: "review",
      titleText: "Rewards",
      prev: Step.Actions,
    },
    [Step.Review]: {
      buttonText: "Publish",
      ownLink: "review",
      titleText: "Review",
      prev: Step.Rewards,
    },
  };

  const currentStep = getCurrentStep();
  const prevStep = currentStep === Step.Details ? null : stepContentMapper[stepContentMapper[currentStep].prev];

  return (
    <S.Entry>
      <CreateCampaignHeader
        link={prevStep ? prevStep.ownLink : "/dashboard/campaigns"}
        name={prevStep ? "Back to " + prevStep.titleText : "Create a Campaign"}
      />
      <S.LayoutContent>
        <CreateCampaignSideBar activeItem={currentStep} />
        <S.Content>
          <S.Header>
            <PageTitle title={stepContentMapper[currentStep].titleText} />
            <Button asLink={currentStep !== Step.Review ? { to: stepContentMapper[currentStep].nextLink } : undefined}>
              {stepContentMapper[currentStep].buttonText}
            </Button>
          </S.Header>
          <Routes>
            <Route path={""} element={<Navigate to={"details"} />} />
            <Route path={"details"} element={<CampaignDetailsPage />} />
            <Route path={"actions"} element={<CampaignActionsPage />} />
            <Route path={"rewards"} element={<CampaignRewardsPage />} />
            <Route path={"review"} element={<CampaignReviewPage />} />
            <Route path={"*"} element={<Navigate to={"details"} />} />
          </Routes>
        </S.Content>
      </S.LayoutContent>
    </S.Entry>
  );
};

CreateCampaignLayout.S = S;
