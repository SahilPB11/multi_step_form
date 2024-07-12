// src/components/__tests__/Step1.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Step1 from "../Step1";

test("renders Step1 component and handles form submission", () => {
  const nextStep = jest.fn();
  const handleChange = jest.fn();
  const formData = { name: "", email: "", phone: "" };

  render(
    <Step1
      nextStep={nextStep}
      handleChange={handleChange}
      formData={formData}
    />
  );

  // Check if inputs are rendered
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();

  // Simulate form submission
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

  // Check if nextStep is called
  expect(nextStep).toHaveBeenCalled();
});
