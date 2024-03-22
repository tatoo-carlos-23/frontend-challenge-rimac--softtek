import AuthRouter from "./AuthRouter";
import DashboardRouter from "./Dashboard";

const RouterIndex = () => {
  return (
    <>
      <AuthRouter />
      <DashboardRouter/>
    </>
  );
};

export default RouterIndex;
