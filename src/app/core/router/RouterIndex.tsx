import { useDispatch } from "react-redux";
import AuthRouter from "./AuthRouter";
import DashboardRouter from "./Dashboard";
import { useEffect, useState } from "react";
import { IUserAuth } from "../store/types";
import { SESSION_STORAGE } from "../constants";
import { setAuth, setAuthClose } from "../store/reducers";

const RouterIndex = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch(); 

  useEffect(() => {
    try {
      setIsLoading(true);
      const resSStorage = sessionStorage.getItem(SESSION_STORAGE.TOKEN_AUTH);
      if (!resSStorage) throw new Error("NO=TOKEN");
      const user = JSON.parse(resSStorage) as IUserAuth;
      if ((user?.name || "").length === 0) throw new Error("NO=USER");
      dispatch(setAuth({ ...user, loggued: true }));
    } catch (error) {
      dispatch(setAuthClose());
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    } 
  }, [dispatch]);

  return (
    <>
      {isLoading && <span>Cargando ...</span>}
      <AuthRouter />
      <DashboardRouter   />
    </>
  );
};

export default RouterIndex;
