import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    // Simulate file upload
    alert(`Uploading "${filename}"... (Prototype)`);
    console.log('Simulating file upload for:', filename);

    setTimeout(() => {
      // Fake a successful upload response
      const fakeFilePath = 'https://via.placeholder.com/400x200.png?text=Upload+Successful';
      setUploadedFile({ fileName: filename, filePath: fakeFilePath });
      alert(`"${filename}" uploaded successfully!`);
    }, 1500); // Simulate a 1.5 second upload time
  };

  return (
    <div>
      <h2>File Upload</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input type="file" id="myFile" onChange={onChange} />
          <label htmlFor="myFile">{filename}</label>
        </div>
        <input type="submit" value="Upload" />
      </form>
      {uploadedFile.fileName && (
        <div>
          <h3>{uploadedFile.fileName}</h3>
          <img style={{ width: '50%' }} src={uploadedFile.filePath} alt="" />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
