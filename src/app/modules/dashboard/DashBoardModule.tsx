import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import StepContainer from "./components/StepContainer";
import { IItemStep } from "./interfaces";
import StepPlansView from "./views/step-plans/StepPlansView";
import StepSummaryView from "./views/step-summary/StepSummaryView";
import { setAuthClose } from "../../core/store/reducers";

const items: IItemStep[] = [
  { id: 1, label: "Planes y coberturas" },
  { id: 2, label: "Resumen" },
];

const DashBoardModule = () => {
  const [selected, setSelected] = useState<number>(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBackStep = (step: number) => {
    const newStep = step - 1;
    setSelected(newStep);
    if (newStep === 0) {
      sessionStorage.clear();
      dispatch(setAuthClose());
      navigate("/");
    }
  };

  return (
    <div>
      <StepContainer
        items={items}
        idSelected={selected}
        changeBack={(step) => handleBackStep(step)}
      />
      {selected === 1 ? (
        <StepPlansView handlerNextStep={() => setSelected(2)} />
      ) : (
        <StepSummaryView handlerBackStep={() => setSelected(1)} />
      )}
    </div>
  );
};

export default DashBoardModule;
