// src/components/ConfirmationPage.js
import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ConfirmationPage = () => {
  const [formData] = useLocalStorage("formData", {});

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Form Submission Confirmation</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Personal Information</h3>
          <p>
            <strong>Name:</strong> {formData?.personalInfo?.name}
          </p>
          <p>
            <strong>Email:</strong> {formData?.personalInfo?.email}
          </p>
          <p>
            <strong>Phone:</strong> {formData?.personalInfo?.phone}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Address Information</h3>
          <p>
            <strong>Address Line 1:</strong>{" "}
            {formData?.addressInfo?.addressLine1}
          </p>
          <p>
            <strong>Address Line 2:</strong>{" "}
            {formData?.addressInfo?.addressLine2}
          </p>
          <p>
            <strong>City:</strong> {formData?.addressInfo?.city}
          </p>
          <p>
            <strong>State:</strong> {formData?.addressInfo?.state}
          </p>
          <p>
            <strong>Zip Code:</strong> {formData?.addressInfo?.zipCode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
