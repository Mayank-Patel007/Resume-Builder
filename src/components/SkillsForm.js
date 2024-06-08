import React, { useState } from 'react';
import { useResume } from '../ResumeContext';

const SkillsForm = () => {
  const { resumeState, updateSkills } = useResume();
  const [skills, setSkills] = useState(resumeState.skills);

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const updateSkill = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
    updateSkills(newSkills);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      {skills.map((skill, index) => (
        <input
          key={index}
          type="text"
          placeholder="Skill"
          value={skill}
          onChange={(e) => updateSkill(index, e.target.value)}
          className="block w-full mb-2 p-2 border rounded"
        />
      ))}
      <button onClick={addSkill} className="bg-blue-500 text-white p-2 rounded">Add Skill</button>
    </div>
  );
};

export default SkillsForm;
