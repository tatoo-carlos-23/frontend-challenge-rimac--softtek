import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardDetailSelect from "../../components/CardDetailSelect";
import RmSeparator from "../../../../../library/components/separator/RmSeparator";
import { RootState } from "../../../../core/store/store";
import { IViewPlansProps } from "../../interfaces";
import CardSelectFor from "../../components/CardSelectFor";
import { setPlan } from "../../../../core/store/reducers";
import { getPlans } from "../../services";
import { IPlan } from "../../../../core/interfaces";
import { TCardSelect } from "../../types";
import "./step-plans-view.scss";
import RmSpinner from "../../../../../library/components/spinner/RmSpinner";

const StepPlansView = (props: IViewPlansProps) => {
  const [listPlans, setListPlans] = useState<IPlan[]>([]);
  const [typeCard, setTypeCard] = useState<TCardSelect>("");
  const [isLoadingPlan, setIsLoadingPlan] = useState<boolean>(true);

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth);
  const plan = useSelector((state: RootState) => state.plan);

  useEffect(() => {
    if (Object.keys(plan).length > 0) {
      getDataPlans(plan.typeCard);
    }
  }, [plan]);

  const nextView = (val: IPlan) => {
    dispatch(setPlan({ ...val, typeCard: typeCard }));
    if (props.handlerNextStep) props.handlerNextStep();
  };

  const getDataPlans = async (type: TCardSelect) => {
    setTypeCard(type);
    try {
      setIsLoadingPlan(true);
      const birthDay = user.birthDay.split("-");
      const yearsUser = new Date().getFullYear() - parseInt(birthDay[2]);
      const { list } = await getPlans(yearsUser, type);
      setListPlans(list);
    } catch (error) {
      alert("Ocurrio un error.");
      setIsLoadingPlan(false);
    } finally {
      setIsLoadingPlan(false);
    }
  };

  return (
    <div className="container-step-plans">
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
          changeSelected={(type) => getDataPlans(type)}
        />
      </div>
      <RmSeparator height={15} />
      {isLoadingPlan && typeCard !== "" && (
        <div className="container-g-spinner-center">
          <RmSpinner />
          <RmSeparator height={15} />
        </div>
      )}
      {!isLoadingPlan && typeCard !== "" && (
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
