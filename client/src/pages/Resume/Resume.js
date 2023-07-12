import React from 'react';
import pdfFile from './resume/nathan-shaw-resume-2023.pdf';

export default function Resume() {

  return (
    <div>
      <div className="App pdf-container">
        <embed
          src={pdfFile}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
