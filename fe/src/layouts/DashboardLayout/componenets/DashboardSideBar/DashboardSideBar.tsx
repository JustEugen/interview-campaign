import { S } from "./styled";
import { DashboardSideBarItem } from "./componentes/DashboardSideBarItem/DashboardSideBarItem";
// @ts-ignore
import { ReactComponent as AnalyticsIcon } from "../../../../assets/analytics.svg";
// @ts-ignore
import { ReactComponent as MemberShipIcon } from "../../../../assets/membership.svg";
// @ts-ignore
import { ReactComponent as RewardsIcon } from "../../../../assets/rewards.svg";
// @ts-ignore
import { ReactComponent as LandingPageIcon } from "../../../../assets/landing-page.svg";
// @ts-ignore
import { ReactComponent as CampaignIcon } from "../../../../assets/campaign.svg";
// @ts-ignore
import { ReactComponent as ReportsIcon } from "../../../../assets/reports.svg";

export const DashboardSideBar = () => {
  return (
    <S.Entry>
      <DashboardSideBarItem
        icon={<AnalyticsIcon />}
        name={"Analytics"}
        url={"/dashboard/analytics"}
        transitionProp={"fill"}
      />
      <DashboardSideBarItem icon={<MemberShipIcon />} name={"Memberships"} url={"/dashboard"} />
      <DashboardSideBarItem icon={<RewardsIcon />} name={"Rewards"} url={"/dashboard"} />
      <DashboardSideBarItem icon={<LandingPageIcon />} name={"Landing Page"} url={"/dashboard"} />
      <DashboardSideBarItem
        icon={<CampaignIcon />}
        name={"Campaigns"}
        url={"/dashboard/campaigns"}
        transitionProp={"fill"}
      />
      <DashboardSideBarItem icon={<ReportsIcon />} name={"Reports"} url={"/dashboard"} />
    </S.Entry>
  );
};

DashboardSideBar.S = S;
