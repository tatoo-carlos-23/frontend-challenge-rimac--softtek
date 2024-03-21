import { setNewClass } from "../../utils/new-class.util";
import { IRmButtonProps, TRmEventButton } from "./rm-button.interface";
import "./rm-button.scss";

const RmButton = ({
  theme = "primary",
  size = "s",
  ...props
}: IRmButtonProps) => {

  /**
   * Metodo para emitir click
   * @description Solo hara click cuando la propiedad disabled sea diferente de true
   */
  const changeButton = (event: TRmEventButton) => {
    if (!props?.disabled) props.changeButton(event);
  };

  const newClass = new setNewClass()
    .setClass("rm-button")
    .setClassIsValid("rm-button__disabled", props?.disabled)
    .setClassIsValid("rm-button__enabled", !props?.disabled)
    .setClass(`rm-button__theme__${theme}`)
    .setClass(`rm-button__size__${size}`);

  return (
    <button
      style={{ width: props.width ? props.width : "100%" }}
      onClick={(e) => changeButton(e)}
      className={newClass.getClass()}
    >
      {props.label}
    </button>
  );
};

export default RmButton;
