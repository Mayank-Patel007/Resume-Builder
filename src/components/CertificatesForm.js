import React, { useState } from 'react';
import { useResume } from '../ResumeContext';

const CertificatesForm = () => {
  const { resumeState, updateCertificates } = useResume();
  const [certificates, setCertificates] = useState(resumeState.certificates);

  const addCertificate = () => {
    setCertificates([...certificates, { title: '', issuer: '', year: '' }]);
  };

  const updateCertificate = (index, field, value) => {
    const newCertificates = [...certificates];
    newCertificates[index][field] = value;
    setCertificates(newCertificates);
    updateCertificates(newCertificates);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-semibold mb-4">Certificates</h2>
      {certificates.map((cert, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="Title"
            value={cert.title}
            onChange={(e) => updateCertificate(index, 'title', e.target.value)}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Issuer"
            value={cert.issuer}
            onChange={(e) => updateCertificate(index, 'issuer', e.target.value)}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Year"
            value={cert.year}
            onChange={(e) => updateCertificate(index, 'year', e.target.value)}
            className="block w-full mb-2 p-2 border rounded"
          />
        </div>
      ))}
      <button onClick={addCertificate} className="bg-blue-500 text-white p-2 rounded">Add Certificate</button>
    </div>
  );
};

export default CertificatesForm;
