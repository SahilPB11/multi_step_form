// src/components/Step1.js
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import debounce from "lodash.debounce";

const Step1 = ({ nextStep, handleChange, formData }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: formData,
  });

  const debouncedHandleChange = useCallback(debounce(handleChange, 300), []);

  const onSubmit = (data) => {
    debouncedHandleChange(data);
    nextStep();s
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className="w-full p-2 border"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/, message: "Invalid email" },
          })}
          className="w-full p-2 border"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label>Phone</label>
        <input
          {...register("phone", { required: "Phone is required" })}
          className="w-full p-2 border"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white">
        Next
      </button>
    </form>
  );
};

export default React.memo(Step1);
