import { useSelector } from "react-redux";
import BackButton from "../../../../../assets/svgs/back-button.svg";
import LogoFamilyBlack from "../../../../../assets/svgs/logo-family-black.svg";
import { IViewSummaryProps } from "../../interfaces";
import { RootState } from "../../../../core/store/store";
import RmSeparator from "../../../../../library/components/separator/RmSeparator";
import "./step-summary.scss";

const StepSummaryView = (props: IViewSummaryProps) => {
  const plan = useSelector((state: RootState) => state.plan);
  const user = useSelector((state: RootState) => state.auth);

  const backPage = () => {
    if (props.handlerBackStep) props.handlerBackStep();
  };

  return (
    <div className="container-summary">
      <div className="container-summary__child">
        <img
          src={BackButton}
          alt="back-button"
          className="cp container-summary__child__back-btn"
          onClick={() => backPage()}
        />
        <label className="cp container-summary__child__title">
          Resumen del seguro
        </label>
        <div className="ctnrs-card">
          <span className="ctnrs-card__prices">Precios calculados para:</span>
          <RmSeparator height={5} />
          <div className="ctnrs-card__logo-name">
            <img src={LogoFamilyBlack} alt="logo-family-black" />
            <span>
              {user.name} {user.lastName}
            </span>
          </div>
          <RmSeparator height={20} />
          <RmSeparator bgColor="#D7DBF5" height={1} />
          <RmSeparator height={20} />
          <div className="ctnrs-card__detail-plan">
            <div>Responsable de pago</div>
            <div>DNI: {user.numberDocument}</div>
            <div>Celular: {user.numberCellPhone}</div>
          </div>
          <div className="ctnrs-card__detail-plan">
            <div>Plan elegido</div>
            <div>{plan.name}</div>
            <div>Costo del Plan: ${plan.price} al mes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSummaryView;
