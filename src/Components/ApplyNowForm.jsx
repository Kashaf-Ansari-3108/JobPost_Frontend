import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';


function ApplyNowForm() {
  // Define state variables to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();


  };

 
  return (
    <div>
      <h2 className='mt-5 text-center'>Apply Now</h2>
      <form onSubmit={handleSubmit} style={{width:'50%', display:'flex', justifyContent:'center',flexDirection:'column', margin:'auto'}}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume (PDF):</label>
          <input
            type="file"
            id="resume"
            value={resume}
            accept=".pdf"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter:</label>
          <textarea
            id="coverLetter"
            className="form-control"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default ApplyNowForm;
