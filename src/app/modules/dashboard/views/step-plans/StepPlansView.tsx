import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import BackButton from "../../../../../assets/svgs/back-button.svg";
import CardDetailSelect from "../../components/CardDetailSelect";
import RmSeparator from "../../../../../library/components/separator/RmSeparator";
import { RootState } from "../../../../core/store/store";
import { IViewPlansProps } from "../../interfaces";
import CardSelectFor from "../../components/CardSelectFor";
import { setAuthClose, setPlan } from "../../../../core/store/reducers";
import { getPlans } from "../../services";
import { IPlan } from "../../../../core/interfaces";
import { TCardSelect } from "../../types";
import "./step-plans-view.scss";

const StepPlansView = (props: IViewPlansProps) => {
  const [listPlans, setListPlans] = useState<IPlan[]>([]);
  const [typeCard, setTypeCard] = useState<TCardSelect>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth);
  const plan = useSelector((state: RootState) => state.plan);

  useEffect(() => {
    getDataPlans();
    if (Object.keys(plan).length > 0) {
      setTypeCard(plan.typeCard); 
    }
  }, [plan, setTypeCard]);

  const nextView = (val: IPlan) => {
    dispatch(setPlan({ ...val, typeCard: typeCard }));
    if (props.handlerNextStep) props.handlerNextStep();
  };

  const closeSession = () => {
    sessionStorage.clear();
    dispatch(setAuthClose());
    navigate("/");
  };

  const getDataPlans = async () => {
    try {
      const { list } = await getPlans();
      setListPlans(list);
    } catch (error) {}
  };

  return (
    <div className="container-step-plans">
      <div className="container-step-plans__back-btn">
        <img
          className="cp"
          src={BackButton}
          alt="back-button"
          onClick={() => closeSession()}
        />
      </div>
      <div className="container-step-plans__description">
        <div className="generale-description summary">
          {user.name} ¿Para quién deseas cotizar?
        </div>
        <div className="generale-description description">
          Selecciona la opción que se ajuste más a tus necesidades.
        </div>
      </div>
      <div className="container-step-plans__card-select">
        <CardSelectFor
          value={typeCard}
          changeSelected={(type) => setTypeCard(type)}
        />
      </div>
      <RmSeparator height={15} />
      <div></div>

      {typeCard !== "" && (
        <CardDetailSelect
          items={listPlans}
          typeCard={typeCard}
          changeCard={(val) => nextView(val)}
        />
      )}
      <RmSeparator height={40} />
    </div>
  );
};

export default StepPlansView;
