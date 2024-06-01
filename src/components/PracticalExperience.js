import React, { useState } from 'react';
import '../styles/PracticalExperience.css'

const PracticalExperience = () => {
  const [editMode, setEditMode] = useState(true);
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: '',
    dates: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({
      ...experience,
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
          <input type="text" name="company" value={experience.company} onChange={handleChange} placeholder="Company Name" />
          <input type="text" name="position" value={experience.position} onChange={handleChange} placeholder="Position Title" />
          <textarea name="responsibilities" value={experience.responsibilities} onChange={handleChange} placeholder="Main Responsibilities"></textarea>
          <input type="text" name="dates" value={experience.dates} onChange={handleChange} placeholder="Dates" />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p>Dates: {experience.dates}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
