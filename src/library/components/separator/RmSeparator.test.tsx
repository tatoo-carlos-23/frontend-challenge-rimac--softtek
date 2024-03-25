import { render } from "@testing-library/react";
import RmSeparator from "./RmSeparator";

describe("RmSeparator component", () => {
  it("Verificando valores por defecto", () => {
    const { container } = render(<RmSeparator />);
    const separator = container.firstChild as HTMLElement;

    expect(separator).toBeInTheDocument();
    expect(separator).toHaveStyle({
      width: "100%",
      height: "10px",
    });
  });

  it("Varificando que si se agregen los estilos nuevos.", () => {
    const { container } = render(<RmSeparator height={20} bgColor="red" />);
    const separator = container.firstChild as HTMLElement;

    expect(separator).toBeInTheDocument();
    expect(separator).toHaveStyle({
      width: "100%",
      height: "20px",
      backgroundColor: "red",
    });
  });
});
