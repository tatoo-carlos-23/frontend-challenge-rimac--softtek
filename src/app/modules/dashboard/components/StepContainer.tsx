import { useEffect, useState } from "react";
import { classNames } from "../../../../library/utils";
import { IItemStep, IStepContainerProps } from "../interfaces";
import "./step.scss";

const Step = (props: IItemStep) => {
  return (
    <div className="container-step" key={props.id + "step-fff"}>
      <div
        className={classNames(
          "container-step__id",
          props?.selected
            ? "container-step__id__active"
            : "container-step__id__inactive"
        )}
      >
        {props.id}
      </div>
      <div
        className={classNames(
          "container-step__label",
          props?.selected
            ? "container-step__label__active"
            : "container-step__label__inactive"
        )}
      >
        {props.label}
      </div>
    </div>
  );
};

export const StepContainer = (props: IStepContainerProps) => {
  const [idSelected, setIdSelected] = useState<number | string>(0);

  useEffect(() => {
    if (props.idSelected) {
      setIdSelected(props.idSelected);
    }
  }, [props.idSelected]);

  return (
    <div className="container-step-c">
      {props.items.map((item, index) => {
        return (
          <div key={"step-div-" + (index + 1)}>
            <Step
              id={parseInt(item.id + "")}
              label="Planes y coberturas"
              selected={idSelected.toString() === item.id.toString()}
            />
            <div className="container-step-c__separator"></div>
          </div>
        );
      })}
    </div>
  );
};

export default StepContainer;
