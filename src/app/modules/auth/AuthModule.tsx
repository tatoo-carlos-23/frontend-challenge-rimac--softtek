import { Footer } from "./components/Footer";
import RmButton from "../../../library/components/button/RmButton";
import RmInput from "../../../library/components/input/RmInput";
import RmInputSelect from "../../../library/components/input-select/RmInputSelect";

const AuthModule = () => {
  return (
    <>
      <div>Auth module</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima libero
        maxime nesciunt natus voluptate. Sapiente magni vitae, ipsum optio
        dolore veritatis illo numquam nesciunt minus amet facere eveniet
        exercitationem reiciendis.
      </div>

      <br />
      <RmButton
        size="l"
        label="Iniciar"
        changeButton={() => console.warn("Button [l] [secondary]")}
      />
      <br />
      <br />
      <div style={{ padding: "20px" }}>
        <RmInputSelect value="Select" label="Nro. de documento" />
      </div>
      <br />
      <br />
      <div style={{ padding: "20px" }}>
        <RmInput
          value="Carlos"
          label="Celular"
          changeValue={(val) => console.warn("VAL: ", val)}
        />
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default AuthModule;
