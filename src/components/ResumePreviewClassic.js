import React, { useRef, useState } from 'react';
import { useResume } from '../ResumeContext';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import { MdOutlineDownload, MdDelete } from "react-icons/md";

const ResumePreviewClassic = () => {
  const { resumeState } = useResume();
  const { personalDetails, profilePic, signature } = resumeState; // Extract personalDetails and profilePic directly
  const resumeRef = useRef(null);
  const [deleteVisible, setDeleteVisible] = useState('');
  const [resumeData, setResumeData] = useState(() => {
    const { personalDetails, ...rest } = resumeState; // Remove personalDetails from initial state
    return rest;
  });

  const handleDownload = () => {
    htmlToImage.toPng(resumeRef.current)
      .then((dataUrl) => {
        download(dataUrl, 'classic-resume.png');
      })
      .catch((error) => {
        console.error('Error generating image:', error);
      });
  };

  const handleDelete = (sectionName) => {
    const updatedResumeData = { ...resumeData };
    delete updatedResumeData[sectionName];
    setResumeData(updatedResumeData);
  };

  const handleMouseEnter = (sectionName) => {
    setDeleteVisible(sectionName);
  };

  const handleMouseLeave = () => {
    setDeleteVisible('');
  };

  return (
    <>
      <div className="p-8 border border-gray-300 rounded-lg shadow-lg max-w-4xl mx-auto bg-gray-100" ref={resumeRef}>
        <div className="bg-gray-800 p-4 rounded-t text-white text-center flex flex-col items-center mb-8">
          {profilePic && (
            <img src={profilePic} alt="Profile" className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg" />
          )}
          <div className="mt-4 text-center">
            <h1 className="text-4xl font-serif font-bold text-white">{personalDetails['Given name']} {personalDetails['Family name']}</h1>
            <p className="text-gray-300">{personalDetails['Email address']} | {personalDetails['Phone number']}</p>
          </div>
        </div>

        {Object.entries(resumeData).map(([sectionName, sectionData]) => (
          <div key={sectionName} className="mb-6 group" onMouseEnter={() => handleMouseEnter(sectionName)} onMouseLeave={handleMouseLeave}>
            <h2 className="text-xl font-semibold bg-gray-600 text-white p-2 rounded-t relative flex justify-between items-center">
              {sectionName}
              {deleteVisible === sectionName && (
                <button className="p-3 text-gray-600 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => handleDelete(sectionName)}><MdDelete /></button>
              )}
            </h2>
            <div className="p-4 bg-gray-200 rounded-b shadow">
              {/* Display sectionData here */}
              {Array.isArray(sectionData) ? (
                sectionData.map((item, index) => (
                  <div key={index} className="mb-2">
                    {Object.values(item).map((detail, i) => (
                      <p key={i} className="text-gray-700">{detail}</p>
                    ))}
                  </div>
                ))
              ) : (
                <p className="text-gray-700">{sectionData}</p>
              )}
            </div>
          </div>
        ))}

        {signature && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold bg-gray-600 text-white p-2 rounded-t">Signature</h2>
            <div className="p-4 bg-gray-200 rounded-b shadow">
              <p className="text-gray-700">{signature}</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handleDownload} className="flex justify-center items-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Download<div className='pl-2'><MdOutlineDownload /></div>
        </button>
      </div>
    </>
  );
};

export default ResumePreviewClassic;
