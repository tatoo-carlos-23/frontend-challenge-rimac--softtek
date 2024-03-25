import { useSelector } from "react-redux";
import { RootState } from "../../../../core/store/store";
import { IViewSummaryProps } from "../../interfaces";
import RmSeparator from "../../../../../library/components/separator/RmSeparator";
import LogoFamilyBlack from "../../../../../assets/svgs/logo-family-black.svg";
import "./step-summary.scss";

const StepSummaryView = (_props: IViewSummaryProps) => {
  const plan = useSelector((state: RootState) => state.plan);
  const user = useSelector((state: RootState) => state.auth);

  return (
    <div className="container-summary">
      <div className="container-summary__child">
        <label className="cp container-summary__child__title">
          Resumen del seguro
        </label>
        <div className="ctnrs-card">
          <span className="ctnrs-card__prices">Precios calculados para:</span>
          <RmSeparator height={10} />
          <div className="ctnrs-card__logo-name">
            <img src={LogoFamilyBlack} alt="logo-family-black" />
            <span>
              {user.name} {user.lastName}
            </span>
          </div>
          <RmSeparator height={15} />
          <RmSeparator bgColor="#D7DBF5" height={1} />
          <RmSeparator height={15} />
          <div className="ctnrs-card__detail-plan">
            <div>Responsable de pago</div>
            <div>DNI: {user.numberDocument}</div>
            <div>Celular: {user.numberCellPhone}</div>
          </div>
          <div className="ctnrs-card__detail-plan">
            <div>Plan elegido</div>
            <div>{plan.name}</div>
            <div>Costo del Plan: ${user.numberCellPhone} al mes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSummaryView;
