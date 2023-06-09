import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout/DashboardLayout";
import { CreateCampaignLayout } from "./layouts/CreateCampaignLayout/CreateCampaignLayout";

export const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={"/dashboard"} />} />
      <Route path={"/dashboard/*"} element={<DashboardLayout />} />
      <Route path={"/campaign/*"} element={<CreateCampaignLayout />} />
    </Routes>
  );
};
