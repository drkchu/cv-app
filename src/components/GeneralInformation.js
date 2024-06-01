import React, { useState } from "react";
import '../styles/GeneralInformation.css';

const GeneralInformation = () => {
  const [editMode, setEditMode] = useState(true);
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => { // Smart way to update when typing in new values
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // So that the form doesn't get submitted
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="tel"
            name="phone"
            value={info.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInformation;
