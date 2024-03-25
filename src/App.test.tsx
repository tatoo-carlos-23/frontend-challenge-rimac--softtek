// // import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// xtest('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { render } from "@testing-library/react";
import App from "./App";

xdescribe("Test app", () => {
  it("renders App component", () => {
    render(<App />);
    // const linkElement = getByText(/HeaderGlobal/i);
    // expect(linkElement).toBeInTheDocument();
  });
});
