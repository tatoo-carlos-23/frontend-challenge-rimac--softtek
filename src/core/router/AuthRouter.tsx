import { Route, Routes } from "react-router-dom";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Auth</div>} />
    </Routes>
  );
};

export default AuthRouter;
