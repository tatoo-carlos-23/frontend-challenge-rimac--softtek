import { useState } from "react";
import StepContainer from "./components/StepContainer";
import { IItemStep } from "./interfaces";
import StepPlansView from "./views/step-plans/StepPlansView";
import StepSummaryView from "./views/step-summary/StepSummaryView";

const items: IItemStep[] = [
  { id: 1, label: "Planes y coberturas" },
  { id: 2, label: "Resumen" },
];

const DashBoardModule = () => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <div>
      <StepContainer items={items} idSelected={selected}    />
      {selected === 1 ? (
        <StepPlansView handlerNextStep={() => setSelected(2)} />
      ) : (
        <StepSummaryView handlerBackStep={() => setSelected(1)} />
      )}
    </div>
  );
};

export default DashBoardModule;
