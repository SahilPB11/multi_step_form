// src/components/Step2.js
import React from "react";
import { useForm } from "react-hook-form";

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    handleChange(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Address Line 1</label>
        <input
          {...register("addressLine1", {
            required: "Address Line 1 is required",
          })}
          className="w-full p-2 border"
        />
        {errors?.addressLine1 && (
          <p className="text-red-500">{errors?.addressLine1?.message}</p>
        )}
      </div>
      <div>
        <label>Address Line 2</label>
        <input {...register("addressLine2")} className="w-full p-2 border" />
      </div>
      <div>
        <label>City</label>
        <input
          {...register("city", { required: "City is required" })}
          className="w-full p-2 border"
        />
        {errors?.city && <p className="text-red-500">{errors?.city?.message}</p>}
      </div>
      <div>
        <label>State</label>
        <input
          {...register("state", { required: "State is required" })}
          className="w-full p-2 border"
        />
        {errors?.state && <p className="text-red-500">{errors?.state?.message}</p>}
      </div>
      <div>
        <label>Zip Code</label>
        <input
          {...register("zipCode", { required: "Zip Code is required" })}
          className="w-full p-2 border"
        />
        {errors?.zipCode && (
          <p className="text-red-500">{errors?.zipCode?.message}</p>
        )}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 bg-gray-500 text-white"
        >
          Back
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white">
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2;
