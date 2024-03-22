import { useEffect } from "react";
import { getPlans } from "./services";

const DashBoardModule = () => {
  const data = async () => {
    try {
      const resp = await getPlans();
      console.warn("Data: ", resp);
    } catch (error) {
      console.warn("Error: ", error);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return <div>Hola dashboard</div>;
};

export default DashBoardModule;
