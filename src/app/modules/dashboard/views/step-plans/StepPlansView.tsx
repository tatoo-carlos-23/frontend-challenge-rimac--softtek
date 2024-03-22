import { IViewPlansProps } from "../../interfaces";
import BackButton from "../../../../../assets/svgs/back-button.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../../core/store/store";
import "./step-plans-view.scss";
import CardSelectFor from "../../components/CardSelectFor";

const StepPlansView = (_props: IViewPlansProps) => {
  
  const user = useSelector((state: RootState) => state.auth);

  return (
    <div className="container-step-plans">
      <div className="container-step-plans__back-btn">
        <img src={BackButton} alt="back-button" />
      </div>
      <div className="container-step-plans__description">
        <div className="generale-description summary">
          {user.name} ¿Para quién deseas cotizar?
        </div>
        <div className="generale-description description">
          Selecciona la opción que se ajuste más a tus necesidades.
        </div>
      </div>
      <div   className="container-step-plans__card-select">
        <CardSelectFor
          changeSelected={(type) => console.warn("Select: ", type)}
        />
      </div>
    </div>
  );
};

export default StepPlansView;
