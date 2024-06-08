import React, { useRef, useState } from 'react';
import { useResume } from '../ResumeContext';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import { MdOutlineDownload, MdDelete } from "react-icons/md";

const ResumePreviewModern = () => {
  const { resumeState, setResumeState } = useResume();
  const { personalDetails, education, experience, skills, languages, hobbies, certificates, profilePic, courses } = resumeState;
  const resumeRef = useRef(null);
  const [deleteVisible, setDeleteVisible] = useState('');

  const handleDownload = () => {
    htmlToImage.toPng(resumeRef.current)
      .then((dataUrl) => {
        download(dataUrl, 'modern-resume.png');
      })
      .catch((error) => {
        console.error('Error generating image:', error);
      });
  };

  const handleDelete = (sectionName) => {
    const updatedResumeState = { ...resumeState };
    delete updatedResumeState[sectionName];
    setResumeState(updatedResumeState);
  };

  const handleMouseEnter = (sectionName) => {
    setDeleteVisible(sectionName);
  };

  const handleMouseLeave = () => {
    setDeleteVisible('');
  };
  

  return (
    <>
      <p>Modern layout</p>
      <div className="p-8 border border-blue-300 rounded-lg shadow-lg max-w-4xl mx-auto bg-blue-50" ref={resumeRef}>
        <div className="flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-t text-white text-center mb-8">
          {profilePic && (
            <img src={profilePic} alt="Profile" className="w-28 h-28 object-cover rounded border-2 border-white shadow-lg mb-4" />
          )}
          <div className=' justify-end text-right'>
            <h1 className="text-4xl font-serif font-bold">{personalDetails['Given name']} {personalDetails['Family name']}</h1>
            <p className="text-blue-100">{personalDetails['Email address']}</p>
            <p className="text-blue-100">{personalDetails['Phone number']}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="mb-6 group relative" onMouseEnter={() => handleMouseEnter('Education')} onMouseLeave={handleMouseLeave}>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded-t relative flex justify-between items-center">
              Education
              {deleteVisible === 'Education' && (
                <button className={`absolute top-0 right-0 p-3 text-gray-600 hover:text-red-600 transition-opacity ${deleteVisible === 'Education' ? 'opacity-100' : 'opacity-0'}`} onClick={() => handleDelete('Education')}><MdDelete /></button>
              )}
            </h2>
            <div className="p-4 bg-blue-100 rounded-b shadow">
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold text-lg text-blue-700">{edu.degree}</p>
                  <p className="text-blue-600">{edu.institution} <span className="text-blue-500">({edu.year})</span></p>
                </div>
              ))}
            </div>
          </div>
          {/* Repeat the same structure for other sections */}
          <div className="mb-6 group relative" onMouseEnter={() => handleMouseEnter('Experience')} onMouseLeave={handleMouseLeave}>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded-t relative flex justify-between items-center">
              Experience
              {deleteVisible === 'Experience' && (
                <button className={`absolute top-0 right-0 p-3 text-gray-600 hover:text-red-600 transition-opacity ${deleteVisible === 'Experience' ? 'opacity-100' : 'opacity-0'}`} onClick={() => handleDelete('Experience')}><MdDelete /></button>
              )}
            </h2>
            <div className="p-4 bg-blue-100 rounded-b shadow">
              {experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold text-lg text-blue-700">{exp.jobTitle}</p>
                  <p className="text-blue-600">{exp.company} <span className="text-blue-500">({exp.year})</span></p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 mb-6 group relative" onMouseEnter={() => handleMouseEnter('Skills')} onMouseLeave={handleMouseLeave}>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded-t relative flex justify-between items-center">
              Skills
              {deleteVisible === 'Skills' && (
                <button className={`absolute top-0 right-0 p-3 text-gray-600 hover:text-red-600 transition-opacity ${deleteVisible === 'Skills' ? 'opacity-100' : 'opacity-0'}`} onClick={() => handleDelete('Skills')}><MdDelete /></button>
              )}
            </h2>
            <div className="p-4 bg-blue-100 rounded-bshadow">
              <ul className="list-disc list-inside text-blue-700 grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <li key={index} className="mb-1">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mb-6 group relative" onMouseEnter={() => handleMouseEnter('Languages')} onMouseLeave={handleMouseLeave}>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded-t relative flex justify-between items-center">
              Languages
              {deleteVisible === 'Languages' && (
                <button className={`absolute top-0 right-0 p-3 text-gray-600 hover:text-red-600 transition-opacity ${deleteVisible === 'Languages' ? 'opacity-100' : 'opacity-0'}`} onClick={() => handleDelete('Languages')}><MdDelete /></button>
              )}
            </h2>
            <div className="p-4 bg-blue-100 rounded-b shadow">
              <ul className="list-disc list-inside text-blue-700">
                {languages.map((language, index) => (
                  <li key={index} className="mb-1">{language}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mb-6 group relative" onMouseEnter={() => handleMouseEnter('Hobbies')} onMouseLeave={handleMouseLeave}>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded-t relative flex justify-between items-center">
              Hobbies
              {deleteVisible === 'Hobbies' && (
                <button className={`absolute top-0 right-0 p-3 text-gray-600 hover:text-red-600 transition-opacity ${deleteVisible === 'Hobbies' ? 'opacity-100' : 'opacity-0'}`} onClick={() => handleDelete('Hobbies')}><MdDelete /></button>
              )}
            </h2>
            <div className="p-4 bg-blue-100 rounded-b shadow">
              <ul className="list-disc list-inside text-blue-700">
                {hobbies.map((hobby, index) => (
                  <li key={index} className="mb-1">{hobby}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-2 mb-6 group relative" onMouseEnter={() => handleMouseEnter('Certificates')} onMouseLeave={handleMouseLeave}>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded-t relative flex justify-between items-center">
              Certificates
              {deleteVisible === 'Certificates' && (
                <button className={`absolute top-0 right-0 p-3 text-gray-600 hover:text-red-600 transition-opacity ${deleteVisible === 'Certificates' ? 'opacity-100' : 'opacity-0'}`} onClick={() => handleDelete('Certificates')}><MdDelete /></button>
              )}
            </h2>
            <div className="p-4 bg-blue-100 rounded-b shadow">
              {certificates.map((cert, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold text-lg text-blue-700">{cert.title}</p>
                  <p className="text-blue-600">{cert.issuer} <span className="text-blue-500">({cert.year})</span></p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 mb-6 group relative" onMouseEnter={() => handleMouseEnter('Courses')} onMouseLeave={handleMouseLeave}>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded-t relative flex justify-between items-center">
              Courses
              {deleteVisible === 'Courses' && (
                <button className={`absolute top-0 right-0 p-3 text-gray-600 hover:text-red-600 transition-opacity ${deleteVisible === 'Courses' ? 'opacity-100' : 'opacity-0'}`} onClick={() => handleDelete('Courses')}><MdDelete /></button>
              )}
            </h2>
            <div className="p-4 bg-blue-100 rounded-b shadow">
              {courses.map((course, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold text-lg text-blue-700">{course.name}</p>
                  <p className="text-blue-600">{course.institution} <span className="text-blue-500">({course.year})</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handleDownload} className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download<div className='pl-2'><MdOutlineDownload /></div>
        </button>
      </div>
    </>
  );
};

export default ResumePreviewModern;

