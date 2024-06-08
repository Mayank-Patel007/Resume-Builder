import React, { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const [resumeState, setResumeState] = useState({
    personalDetails: {},
    education: [],
    experience: [],
    skills: [],
    languages: [],
    qualities: [],
    hobbies: [],
    certificates: [],
    profilePic: '',
    courses: [],
  });

  const updatePersonalDetails = (updatedDetails) => {
    setResumeState((prevState) => ({
      ...prevState,
      personalDetails: updatedDetails,
    }));
  };

  const updateEducation = (updatedEducation) => {
    setResumeState((prevState) => ({
      ...prevState,
      education: updatedEducation,
    }));
  };

  const updateExperience = (updatedExperience) => {
    setResumeState((prevState) => ({
      ...prevState,
      experience: updatedExperience,
    }));
  };

  const updateSkills = (updatedSkills) => {
    setResumeState((prevState) => ({
      ...prevState,
      skills: updatedSkills,
    }));
  };

  const updateLanguages = (updatedLanguages) => {
    setResumeState((prevState) => ({
      ...prevState,
      languages: updatedLanguages,
    }));
  };

  const updateQualities = (updatedQualities) => {
    setResumeState((prevState) => ({
      ...prevState,
      qualities: updatedQualities,
    }));
  };

  const updateHobbies = (updatedHobbies) => {
    setResumeState((prevState) => ({
      ...prevState,
      hobbies: updatedHobbies,
    }));
  };

  const updateCertificates = (updatedCertificates) => {
    setResumeState((prevState) => ({
      ...prevState,
      certificates: updatedCertificates,
    }));
  };



  const updateProfilePic = (updatedProfilePic) => {
    setResumeState((prevState) => ({
      ...prevState,
      profilePic: updatedProfilePic,
    }));
  };

  const updateCourses = (updatedCourses) => {
    setResumeState((prevState) => ({
      ...prevState,
      courses: updatedCourses,
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeState,
        updatePersonalDetails,
        updateEducation,
        updateExperience,
        updateSkills,
        updateLanguages,
        updateQualities,
        updateHobbies,
        updateCertificates,
        updateProfilePic,
        updateCourses,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
