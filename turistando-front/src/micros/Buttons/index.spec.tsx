import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Buttons"; // Certifique-se de ajustar o caminho do import conforme necessário
import { vi } from "vitest";
// Mocka uma função de clique
const mockOnClick = vi.fn();

describe("Button Component", () => {
  it("deve renderizar o botão com o texto correto", () => {
    const placeholder = "Botão de Teste";
    const { getByText } = render(
      <Button placeholder={placeholder} onClick={mockOnClick} />
    );

    // Verifica se o botão foi renderizado com o texto correto
    expect(getByText(placeholder)).toBeInTheDocument();
  });

  it("deve chamar a função onClick ao ser clicado", () => {
    const { getByText } = render(
      <Button placeholder="Clique-me" onClick={mockOnClick} />
    );
    const button = getByText("Clique-me");

    // Simula um clique no botão
    fireEvent.click(button);

    // Verifica se a função onClick foi chamada
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("deve ter o atributo type correto", () => {
    const { container } = render(<Button placeholder="Submit" type="submit" />);
    const button = container.querySelector("button");

    // Verifica se o atributo type do botão é 'submit'
    expect(button).toHaveAttribute("type", "submit");
  });

});
