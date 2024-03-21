import { Footer } from "./components/Footer";
import RmButton from "../../../library/components/button/RmButton"; 

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
      <Footer />
    </>
  );
};

export default AuthModule;
