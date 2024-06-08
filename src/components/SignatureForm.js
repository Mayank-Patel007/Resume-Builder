import React, { useState } from 'react';
import { useResume } from '../ResumeContext';

const SignatureForm = () => {
  const { resumeState, updateSignature } = useResume();
  const [signature, setSignature] = useState(resumeState.signature);

  const handleChange = (e) => {
    setSignature(e.target.value);
    updateSignature(e.target.value);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-semibold mb-4">Signature</h2>
      <input
        type="text"
        placeholder="Signature"
        value={signature}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
      />
    </div>
  );
};

export default SignatureForm;
