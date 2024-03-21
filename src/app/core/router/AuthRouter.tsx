import { Route, Routes } from "react-router-dom";
import AuthModule from "./../../modules/auth/AuthModule";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthModule />} />
    </Routes>
  );
};

export default AuthRouter;
