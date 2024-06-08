import React, { useState } from 'react';
import { ResumeProvider } from './ResumeContext';
import ResumePreviewClassic from './components/ResumePreviewClassic';
import ResumePreviewModern from './components/ResumePreviewModern';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import SkillsForm from './components/SkillsForm';
import LanguagesForm from './components/LanguagesForm';
import QualitiesForm from './components/QualitiesForm';
import HobbiesForm from './components/HobbiesForm';
import CertificatesForm from './components/CertificatesForm';
import CoursesForm from './components/CoursesForm';
import ProfilePictureForm from './components/ProfilePictureForm';

function App() {
  const [template, setTemplate] = useState('classic');

  const handleTemplateChange = (selectedTemplate) => {
    setTemplate(selectedTemplate);
  };

  return (
    <ResumeProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className='text-5xl font-semibold justify-center text-center'><p>Resume Builder</p></div>
        <div className="mx-auto">
          <div className="flex justify-end mb-4">
            <div className='flex justify-center text-center items-center'><p className='font-serif'>Select your layout:</p></div>
            <button onClick={() => handleTemplateChange('classic')} className="bg-gray-500 hover:bg-gray-800 text-white p-2 rounded mr-2">Classic</button>
            <button onClick={() => handleTemplateChange('modern')} className="bg-blue-500 hover:bg-blue-800 text-white p-2 rounded">Modern</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <PersonalDetailsForm />
              <ProfilePictureForm />
              <div className='flex justify-between '>
                <div className='w-1/2'><EducationForm /></div>
                <div className='w-1/2'><ExperienceForm /></div>
              </div>
              <div className='flex justify-between '>
                <div className='w-1/2'><SkillsForm /></div>
                <div className='w-1/2'><QualitiesForm /></div>
              </div>
              <div className='flex justify-between'>
                <div className='w-1/2'><LanguagesForm /></div>
                <div className='w-1/2'><HobbiesForm /></div>
              </div>
              <CertificatesForm />
              <CoursesForm />
            </div>
            <div>
              {template === 'classic' ? <ResumePreviewClassic /> : <ResumePreviewModern />}
            </div>
          </div>
        </div>
      </div>
    </ResumeProvider>
  );
}

export default App;
