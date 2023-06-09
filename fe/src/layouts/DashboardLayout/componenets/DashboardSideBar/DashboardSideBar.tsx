import { S } from "./styled";
import { DashboardSideBarItem } from "./componentes/DashboardSideBarItem/DashboardSideBarItem";

export const DashboardSideBar = () => {
  return (
    <S.Entry>
      <DashboardSideBarItem name={"Analytics"} url={"/dashboard/analytics"} />
      <DashboardSideBarItem name={"Campaigns"} url={"/dashboard/campaigns"} />
    </S.Entry>
  );
};

DashboardSideBar.S = S;
