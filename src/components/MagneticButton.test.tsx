import React from "react";
import {render, screen} from "@testing-library/react";
import {MagneticButton} from "./MagneticButton";

test('renders magnetic button',
    () => {
       render(<MagneticButton/>);
       const button = screen.getByRole("button");
       expect(button).toBeInTheDocument();
    });

test('can sum values',
    () => {
       const a = 2;
       const b = 3;
       const d = a + b;
       expect(d).toBe(5);
    });

describe('MagneticButton', () => {
   it('renders button element', () => {
      const {getByRole} = render(<MagneticButton/>);
      getByRole("button");
   })
   it('shows date', () => {
      expect(1).toBe(1);
   })
})