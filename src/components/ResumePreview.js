import React from 'react';
import { useResume } from '../ResumeContext';

const ResumePreview = () => {
  const { resumeState } = useResume();
  const { personalDetails, education, experience, skills, languages, qualities, hobbies, certificates, signature, profilePic, courses } = resumeState;

  // Check if any field has content
  const hasContent =
    profilePic ||
    personalDetails['Given name'] ||
    personalDetails['Family name'] ||
    personalDetails['Email address'] ||
    personalDetails['Phone number'] ||
    education.length > 0 ||
    experience.length > 0 ||
    skills.length > 0 ||
    languages.length > 0 ||
    qualities.length > 0 ||
    hobbies.length > 0 ||
    certificates.length > 0 ||
    courses.length > 0 ||
    signature;

  // If no content, return null to render nothing
  if (!hasContent) {
    return null;
  }

  // Render the component if there's content
  return (
    <div className="p-4 border rounded">
      {profilePic && (
        <img src={profilePic} alt="Profile" className="w-32 h-32 object-cover rounded-full mb-4" />
      )}
      <h1 className="text-2xl font-bold mb-4">{personalDetails['Given name']} {personalDetails['Family name']}</h1>
      {personalDetails['Email address'] && <p>Email: {personalDetails['Email address']}</p>}
      {personalDetails['Phone number'] && <p>Phone: {personalDetails['Phone number']}</p>}

      {education.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">Education</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <p>{edu.degree} - {edu.institution} ({edu.year})</p>
            </div>
          ))}
        </div>
      )}

      {experience.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index}>
              <p>{exp.jobTitle} at {exp.company} ({exp.year})</p>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {languages.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">Languages</h2>
          <ul>
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      )}

      {qualities.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">Qualities</h2>
          <ul>
            {qualities.map((quality, index) => (
              <li key={index}>{quality}</li>
            ))}
          </ul>
        </div>
      )}

      {hobbies.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">Hobbies</h2>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      )}

      {certificates.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">Certificates</h2>
          {certificates.map((cert, index) => (
            <div key={index}>
              <p>{cert.title} - {cert.issuer} ({cert.year})</p>
            </div>
          ))}
        </div>
      )}

      {courses.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">Courses</h2>
          {courses.map((course, index) => (
            <div key={index}>
              <p>{course.name} - {course.institution} ({course.year})</p>
            </div>
          ))}
        </div>
      )}

     
    </div>
  );
};

export default ResumePreview;
