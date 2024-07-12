// src/components/Step3.js
import Button from "./Button";

const Step3 = ({ prevStep, formData, handleSubmit }) => (
  <div className="space-y-4">
    <h2>Confirmation</h2>
    <div>
      <h3>Personal Information</h3>
      <p>Name: {formData?.personalInfo?.name}</p>
      <p>Email: {formData?.personalInfo?.email}</p>
      <p>Phone: {formData?.personalInfo?.phone}</p>
    </div>
    <div>
      <h3>Address Information</h3>
      <p>Address Line 1: {formData?.addressInfo?.addressLine1}</p>
      <p>Address Line 2: {formData?.addressInfo?.addressLine2}</p>
      <p>City: {formData?.addressInfo?.city}</p>
      <p>State: {formData?.addressInfo?.state}</p>
      <p>Zip Code: {formData?.addressInfo?.zipCode}</p>
    </div>
    <div className="flex justify-between">
      <Button onClick={prevStep} className="bg-gray-500 text-white">
        Back
      </Button>
      <Button onClick={handleSubmit} className="bg-green-500 text-white">
        Submit
      </Button>
    </div>
  </div>
);

export default Step3;
