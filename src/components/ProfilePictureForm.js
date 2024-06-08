import React, { useState } from 'react';
import { useResume } from '../ResumeContext';

const ProfilePicForm = () => {
  const { resumeState, updateProfilePic } = useResume();
  const [profilePic, setProfilePic] = useState(resumeState.profilePic);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePic(reader.result);
      updateProfilePic(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-semibold mb-4">Profile Picture</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
      />
      {profilePic && (
        <img src={profilePic} alt="Profile" className="w-32 h-32 object-cover rounded-full mt-2" />
      )}
    </div>
  );
};

export default ProfilePicForm;
