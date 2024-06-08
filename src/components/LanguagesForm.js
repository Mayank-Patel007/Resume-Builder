import React, { useState } from 'react';
import { useResume } from '../ResumeContext';

const LanguagesForm = () => {
  const { resumeState, updateLanguages } = useResume();
  const [languages, setLanguages] = useState(resumeState.languages);

  const addLanguage = () => {
    setLanguages([...languages, '']);
  };

  const updateLanguage = (index, value) => {
    const newLanguages = [...languages];
    newLanguages[index] = value;
    setLanguages(newLanguages);
    updateLanguages(newLanguages);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-semibold mb-4">Languages</h2>
      {languages.map((language, index) => (
        <input
          key={index}
          type="text"
          placeholder="Language"
          value={language}
          onChange={(e) => updateLanguage(index, e.target.value)}
          className="block w-full mb-2 p-2 border rounded"
        />
      ))}
      <button onClick={addLanguage} className="bg-blue-500 text-white p-2 rounded">Add Language</button>
    </div>
  );
};

export default LanguagesForm;
