import React, { useState } from 'react';
import { copyText } from '../../../utils/copycode.js';
import '../../../App.css';

const CopyButton = ({ textToCopy, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyText(textToCopy);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`cursor-pointer bg-[#2b2b2b] text-white px-3 py-1 rounded-md flex items-center gap-2 text-xs border border-gray-600 shadow hover:bg-[#3a3a3a] transition-all duration-200 ${className}`}
    >
      {copied ? (
        <>
          <span style={{ fontFamily: 'var(--font-poppins)' }}>Copied</span>
          <i className='ri-check-line text-green-400 text-sm'></i>
        </>
      ) : (
        <>
          <i className='ri-file-copy-line text-sm'></i>
        </>
      )}
    </button>
  );
};

export default CopyButton;
