import React, { useState } from 'react';
import { useResume } from '../ResumeContext';

const HobbiesForm = () => {
  const { resumeState, updateHobbies } = useResume();
  const [hobbies, setHobbies] = useState(resumeState.hobbies);

  const addHobby = () => {
    setHobbies([...hobbies, '']);
  };

  const updateHobby = (index, value) => {
    const newHobbies = [...hobbies];
    newHobbies[index] = value;
    setHobbies(newHobbies);
    updateHobbies(newHobbies);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-semibold mb-4">Hobbies</h2>
      {hobbies.map((hobby, index) => (
        <input
          key={index}
          type="text"
          placeholder="Hobby"
          value={hobby}
          onChange={(e) => updateHobby(index, e.target.value)}
          className="block w-full mb-2 p-2 border rounded"
        />
      ))}
      <button onClick={addHobby} className="bg-blue-500 text-white p-2 rounded">Add Hobby</button>
    </div>
  );
};

export default HobbiesForm;
