import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RmInput from "./RmInput";

describe("RmInput component", () => {
  it("Verificando el placeholder del input", () => {
    const { getByPlaceholderText } = render(
      <RmInput value="Es un input" placeholder="Es un input" />
    );
    const inputElement = getByPlaceholderText("Es un input");
    expect(inputElement).toBeInTheDocument();
  });

  it("Verificando que este activa la clase error", () => {
    const { getByPlaceholderText } = render(
      <RmInput value="Es un input" placeholder="Es un input" error />
    );
    const inputElement = getByPlaceholderText("Es un input");
    expect(inputElement).toHaveClass("rmi-error");
  });
  it("Verificando que el input reciba numeros", () => {
    const { getByPlaceholderText } = render(
      <RmInput value="Es un input" placeholder="12345" error type="number" />
    );
    const inputElement = getByPlaceholderText("12345");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveProperty("type", "number");
  });
  it("Actualizando el valor del input", () => {
    const { getByPlaceholderText } = render(
      <RmInput value="" placeholder="Ingresa texto" />
    );
    const inputElement = getByPlaceholderText("Ingresa texto");
    fireEvent.focus(inputElement);
    fireEvent.input(inputElement, { target: { value: "Hola mundo react." } });
    fireEvent.blur(inputElement);
    expect(inputElement).toHaveValue("Hola mundo react.");
  });

  it("Emitiendo el valor desde la propiedad [changeValue]", () => {
    const mockChangeValue = jest.fn();
    const { getByPlaceholderText } = render(
      <RmInput
        value=""
        placeholder="Ingresa texto"
        changeValue={mockChangeValue}
      />
    );
    const inputElement = getByPlaceholderText("Ingresa texto");
    fireEvent.input(inputElement, { target: { value: "Hola mundo react." } });
    expect(mockChangeValue).toHaveBeenCalledWith("Hola mundo react.");
  });
});
