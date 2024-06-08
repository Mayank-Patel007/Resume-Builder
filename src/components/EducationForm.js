import React, { useState } from 'react';
import { useResume } from '../ResumeContext';

const EducationForm = () => {
  const { resumeState, updateEducation } = useResume();
  const [education, setEducation] = useState(resumeState.education);

  const addEducation = () => {
    setEducation([...education, { degree: '', institution: '', year: '' }]);
  };

  const updateEducationField = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    setEducation(newEducation);
    updateEducation(newEducation);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => updateEducationField(index, 'degree', e.target.value)}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => updateEducationField(index, 'institution', e.target.value)}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Year"
            value={edu.year}
            onChange={(e) => updateEducationField(index, 'year', e.target.value)}
            className="block w-full mb-2 p-2 border rounded"
          />
        </div>
      ))}
      <button onClick={addEducation} className="bg-blue-500 text-white p-2 rounded">Add Education</button>
    </div>
  );
};

export default EducationForm;
