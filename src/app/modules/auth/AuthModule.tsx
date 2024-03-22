import { useState } from "react";
import { Footer } from "./components/Footer";
import ImgFamily from "../../../assets/imgs/family.png";
import RmButton from "../../../library/components/button/RmButton";
import RmInput from "../../../library/components/input/RmInput";
import RmInputSelect from "../../../library/components/input-select/RmInputSelect";
import RmSeparator from "../../../library/components/separator/RmSeparator";
import RmCheckbox from "../../../library/components/checkbox/RmCheckbox";
import { IFormAuth } from "../../core/interfaces";
import { getUserValue } from "./services";
import "./auth-module.scss";

const AuthModule = () => {
  const [form, setForm] = useState<IFormAuth>({
    numberCellPhone: "",
    numberDocument: "",
    isCommunicationPolicy: false,
    isPrivacyPolicy: false,
  });

  const verifyFormValid = () => {
    return (
      form.numberCellPhone.length > 0 &&
      form.numberDocument.length > 0 &&
      form.isPrivacyPolicy &&
      form.isCommunicationPolicy
    );
  };

  const userValues = async () => {
    try {
      const user = await getUserValue();
      console.warn("User: ", user);
    } catch (error) {
      console.error("Errorcito: ", error);
    }
  };

  return (
    <>
      <div className="container-auth">
        <div className="container-auth__family">
          <img src={ImgFamily} alt="img-family" />
        </div>
        <div className="container-auth__form">
          <div className="form-width caf-header">
            <div className="caf-header__description">
              <div className="caf-header__description__dot">
                Seguro Salud Flexible
              </div>
              <div className="caf-header__description__family">
                Creado para ti y tu familia
              </div>
            </div>
            <img src={ImgFamily} alt="img-family" />
          </div>
          <div className="form-width container-auth__form__separator"></div>
          <div className="form-width container-auth__form__message">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría, 100% online.
          </div>
          <div className="form-width container-auth__form__inputs">
            <RmInputSelect
              value={form.numberCellPhone}
              label="Nro. de documento"
              placeholder="Nro. de documento"
              type="number"
              changeValue={(numberCellPhone) =>
                setForm({ ...form, numberCellPhone })
              }
            />
            <RmSeparator height={15} />
            <RmInput
              value={form.numberDocument}
              label="Celular"
              placeholder="Celular"
              type="number"
              changeValue={(numberDocument) =>
                setForm({ ...form, numberDocument })
              }
            />
            <RmSeparator height={20} />

            <RmCheckbox
              value={form.isPrivacyPolicy}
              label="Acepto lo Política de Privacidad"
              changeValue={(isPrivacyPolicy) =>
                setForm({ ...form, isPrivacyPolicy })
              }
            />
            <RmSeparator height={10} />
            <RmCheckbox
              value={form.isCommunicationPolicy}
              label="Acepto la Política Comunicaciones Comerciales"
              changeValue={(isCommunicationPolicy) =>
                setForm({ ...form, isCommunicationPolicy })
              }
            />
            <RmSeparator height={8} />
            <span className="termins-conditions cp">
              Aplican Términos y Condiciones.
            </span>
            <RmSeparator height={20} />
            <RmButton
              label="Cotiza aquí"
              changeButton={() => userValues()}
              disabled={!verifyFormValid()}
              size={window.innerWidth >= 500 ? "l" : "m"}
              theme="secondary"
            />
          </div>
        </div>
      </div>
      <RmSeparator height={80} />
      <Footer />
    </>
  );
};

export default AuthModule;
