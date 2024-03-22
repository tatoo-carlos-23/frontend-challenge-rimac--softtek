import { IViewPlansProps } from "../../interfaces";
import BackButton from "../../../../../assets/svgs/back-button.svg";
import "./step-plans-view.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../core/store/store";

const StepPlansView = (_props: IViewPlansProps) => {
  const { name } = useSelector((state: RootState) => state.auth);

  return (
    <div className="container-step-plans">
      <div className="container-step-plans__back-btn">
        <img src={BackButton} alt="back-button" />
      </div>
      <div>{name}</div>
    </div>
  );
};

export default StepPlansView;
