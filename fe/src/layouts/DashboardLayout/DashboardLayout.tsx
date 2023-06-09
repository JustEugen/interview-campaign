import { S } from "./styled";
import { Header } from "../../shared-components/Header/Header";
import { DashboardSideBar } from "./componenets/DashboardSideBar/DashboardSideBar";
import { PropsWithChildren } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CampaignsPage } from "../../pages/CampaignsPage/CampaignsPage";

export const DashboardLayout = (props: PropsWithChildren) => {
  return (
    <S.Entry>
      <Header />
      <S.LayoutContent>
        <DashboardSideBar />
        <S.PageContent>
          <Routes>
            <Route path={""} element={<Navigate to={"campaigns"} />} />
            <Route path={"campaigns"} element={<CampaignsPage />} />
          </Routes>
        </S.PageContent>
      </S.LayoutContent>
    </S.Entry>
  );
};

DashboardLayout.S = S;
