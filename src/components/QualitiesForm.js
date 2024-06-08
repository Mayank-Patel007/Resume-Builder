import React, { useState } from 'react';
import { useResume } from '../ResumeContext';

const QualitiesForm = () => {
  const { resumeState, updateQualities } = useResume();
  const [qualities, setQualities] = useState(resumeState.qualities);

  const addQuality = () => {
    setQualities([...qualities, '']);
  };

  const updateQuality = (index, value) => {
    const newQualities = [...qualities];
    newQualities[index] = value;
    setQualities(newQualities);
    updateQualities(newQualities);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-semibold mb-4">Qualities</h2>
      {qualities.map((quality, index) => (
        <input
          key={index}
          type="text"
          placeholder="Quality"
          value={quality}
          onChange={(e) => updateQuality(index, e.target.value)}
          className="block w-full mb-2 p-2 border rounded"
        />
      ))}
      <button onClick={addQuality} className="bg-blue-500 text-white p-2 rounded">Add Quality</button>
    </div>
  );
};

export default QualitiesForm;
