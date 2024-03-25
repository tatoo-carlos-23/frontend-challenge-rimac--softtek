import { render } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer component", () => {
  it("Verificando text", () => {
    const { getByText } = render(<Footer />);
    const description = getByText("© 2023 RIMAC Seguros y Reaseguros.");
    expect(description).toBeInTheDocument();
  });
});
