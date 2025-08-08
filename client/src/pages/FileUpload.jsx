import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myFile', file);

    try {
      const token = 'your_jwt_token'; // Placeholder
      const res = await axios.post('http://localhost:5000/api/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': token
        }
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      console.error(err.response.data);
    }
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
