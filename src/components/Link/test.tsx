import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Link from "./index";

describe("Link component", () => {
  test("renders the link with the correct text", () => {
    render(
      <BrowserRouter>
        <Link text="Portfolio" to="/portfolio" />
      </BrowserRouter>
    );

    const linkElement = screen.getByText(/Portfolio/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders the link with the correct href", () => {
    render(
      <BrowserRouter>
        <Link text="Portfolio" to="/portfolio" />
      </BrowserRouter>
    );

    const linkElement = screen.getByText(/Portfolio/i);
    expect(linkElement.closest("a")).toHaveAttribute("href", "/portfolio");
  });

  test("applies the correct styles", () => {
    render(
      <BrowserRouter>
        <Link text="Portfolio" to="/portfolio" />
      </BrowserRouter>
    );

    const linkElement = screen.getByText(/Portfolio/i);
    expect(linkElement.parentElement).toHaveClass("text-white");
    expect(linkElement.parentElement).toHaveClass("hover:bg-[#1f618d]");
    expect(linkElement.parentElement).toHaveClass("m-7");
  });
});
