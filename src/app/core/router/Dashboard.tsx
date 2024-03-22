import { Route, Routes } from "react-router-dom";
import DashBoardModule from "../../modules/dashboard/DashBoardModule";

const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashBoardModule />} />
    </Routes>
  );
};

export default DashboardRouter;
