// src/components/__tests__/Step1.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Step1 from "../Step1";

test("renders Step1 component and submits form", () => {
  const handleChange = jest.fn();
  const nextStep = jest.fn();
  const formData = {};

  render(
    <Step1
      nextStep={nextStep}
      handleChange={handleChange}
      formData={formData}
    />
  );

  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: "john@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/phone/i), {
    target: { value: "1234567890" },
  });

  fireEvent.click(screen.getByText(/next/i));

  expect(handleChange).toHaveBeenCalled();
  expect(nextStep).toHaveBeenCalled();
});
