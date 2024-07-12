// src/components/MultiStepForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { useLocalStorage } from '../hooks/useLocalStorage';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useLocalStorage('formData', {
    personalInfo: {},
    addressInfo: {},
  });
  const navigate = useNavigate();

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  const handleSubmit = async () => {
    try {
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));
      navigate('/confirmation');
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const stepComponents = [
    <Step1 nextStep={nextStep} handleChange={data => handleChange('personalInfo', data)} formData={formData?.personalInfo} />,
    <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={data => handleChange('addressInfo', data)} formData={formData?.addressInfo} />,
    <Step3 prevStep={prevStep} formData={formData} handleSubmit={handleSubmit} />
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      {stepComponents[step - 1]}
    </div>
  );
};

export default MultiStepForm;
