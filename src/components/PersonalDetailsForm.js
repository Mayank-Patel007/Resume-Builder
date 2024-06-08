import React from 'react';
import { useResume } from '../ResumeContext';

const PersonalDetailsForm = () => {
  const { resumeState, updatePersonalDetails } = useResume();
  const { personalDetails } = resumeState;

  const handleChange = (field, value) => {
    updatePersonalDetails({ ...personalDetails, [field]: value });
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
      <input
        type="text"
        placeholder="Given Name"
        value={personalDetails['Given name'] || ''}
        onChange={(e) => handleChange('Given name', e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Family Name"
        value={personalDetails['Family name'] || ''}
        onChange={(e) => handleChange('Family name', e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={personalDetails['Email address'] || ''}
        onChange={(e) => handleChange('Email address', e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={personalDetails['Phone number'] || ''}
        onChange={(e) => handleChange('Phone number', e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
    </div>
  );
};

export default PersonalDetailsForm;
