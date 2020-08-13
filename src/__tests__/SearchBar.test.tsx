import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import SearchBar from "../components/SearchBar";

let container: HTMLElement;

// Setup
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it("should render with or without the button", () => {
  act(() => render(<SearchBar />, container));
  expect(container.querySelector(".search-bar button")).not.toBeNull();

  act(() => render(<SearchBar hideButton />, container));
  expect(container.querySelector(".search-bar button")).toBeNull();
});

it("should call the onSearch callback on button click", () => {
  const mockCallback = jest.fn();

  act(() => render(<SearchBar onSearch={mockCallback} />, container));

  const searchBtn = container.querySelector(".search-bar button");
  searchBtn?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  expect(mockCallback).toHaveBeenCalledTimes(1);
});

it("should call the onSearch callback on Enter key release", () => {
  const mockCallback = jest.fn();

  act(() => render(<SearchBar onSearch={mockCallback} />, container));

  const searchInput = container.querySelector(".search-bar input");
  searchInput?.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter" }));

  expect(mockCallback).toHaveBeenCalledTimes(1);
});
