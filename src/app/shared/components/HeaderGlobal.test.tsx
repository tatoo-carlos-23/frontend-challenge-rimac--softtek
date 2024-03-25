import { render } from "@testing-library/react";
import HeaderGlobal from "./HeaderGlobal";

test("renders HeaderGlobal component", () => {
  const { getByAltText, getByText } = render(<HeaderGlobal />);
  const logoElement = getByAltText("logo principal");
  const buyTextElement = getByText("¡Compra por este medio!");
  const numberElement = getByText("(01) 411 6001");

  expect(logoElement).toBeInTheDocument();
  expect(buyTextElement).toBeInTheDocument();
  expect(numberElement).toBeInTheDocument();
});
