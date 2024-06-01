import React, { useState } from 'react';
import '../styles/EducationalExperience.css'

const EducationalExperience = () => {
  const [editMode, setEditMode] = useState(true);
  const [education, setEducation] = useState({ school: '', title: '', date: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="school" value={education.school} onChange={handleChange} placeholder="School Name" />
          <input type="text" name="title" value={education.title} onChange={handleChange} placeholder="Title of Study" />
          <input type="text" name="date" value={education.date} onChange={handleChange} placeholder="Date of Study" />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Title: {education.title}</p>
          <p>Date: {education.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationalExperience;
