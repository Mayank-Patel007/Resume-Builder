import React, { useState } from 'react';
import { useResume } from '../ResumeContext';

const ExperienceForm = () => {
  const { resumeState, updateExperience } = useResume();
  const [experience, setExperience] = useState(resumeState.experience);

  const addExperience = () => {
    setExperience([...experience, { jobTitle: '', company: '', year: '' }]);
  };

  const updateExperienceField = (index, field, value) => {
    const newExperience = [...experience];
    newExperience[index][field] = value;
    setExperience(newExperience);
    updateExperience(newExperience);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="Job Title"
            value={exp.jobTitle}
            onChange={(e) => updateExperienceField(index, 'jobTitle', e.target.value)}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => updateExperienceField(index, 'company', e.target.value)}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Year"
            value={exp.year}
            onChange={(e) => updateExperienceField(index, 'year', e.target.value)}
            className="block w-full mb-2 p-2 border rounded"
          />
        </div>
      ))}
      <button onClick={addExperience} className="bg-blue-500 text-white p-2 rounded">Add Experience</button>
    </div>
  );
};

export default ExperienceForm;
