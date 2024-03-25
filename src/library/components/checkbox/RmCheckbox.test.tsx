import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RmCheckbox from "./RmCheckbox";

describe("RmCheckbox component", () => {
  it("Testeado label", () => {
    const { getByText } = render(
      <RmCheckbox label="Terminos y condiciones" value={true} />
    );
    const labelContent = getByText("Terminos y condiciones");
    expect(labelContent).toHaveTextContent("Terminos y condiciones");
  });

  it("Click en el label para marcar", () => {
    const mockChangeValue = jest.fn();
    const { getByText } = render(
      <RmCheckbox
        changeValue={mockChangeValue}
        value={false}
        label="Terminos y condiciones"
      />
    );
    const checkbox = getByText("Terminos y condiciones");
    fireEvent.click(checkbox);
    expect(mockChangeValue).toHaveBeenCalledWith(true);
  });

  it("Verificando que el componente tenga habilitado el checkbox por defecto.", () => {
    const { container } = render(<RmCheckbox value />);
    const svgElement = container.querySelector("svg > path");
    expect(svgElement).toBeInTheDocument();
  });

  it("Si esta desmarcado pero es requerido", () => {
    const { getByText } = render(
      <RmCheckbox
        label="Terminos y condiciones de la plataforma."
        value={false}
        isRequired
      />
    );
    const labelContent = getByText("Terminos y condiciones de la plataforma.");
    expect(labelContent).toHaveClass("rms-is-required");
  });

  it("Que no tenga texto[label]", () => {
    const { container } = render(<RmCheckbox value />);
    const svgElement = container.querySelector("label");
    expect(svgElement?.textContent).toBe("");
  });

  it("Desmarcando checkbox", () => {
    const mockChangeValue = jest.fn();
    const { container } = render(
      <RmCheckbox
        value={true}
        changeValue={mockChangeValue}
        label="Terminos y condiciones"
      />
    );
    const svgElement = container.querySelector("svg") as Element;
    fireEvent.click(svgElement);
    expect(mockChangeValue).toHaveBeenCalledWith(false);
  });
});
