import React, { useState } from 'react';

const AddStaff = ({ addEvent }) => {
  // Set up state for name and email using useState
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle name change
  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };

  // Function to handle email change
  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };

  // Function to add new staff and reset the form
  const addParent = () => {
    addEvent({
      name: name,
      email: email,
    });

    // Reset form fields
    setName('');
    setEmail('');
  };

  return (
    <div className="addStaff">
      <h2>Add Staff</h2>
      <div>
        <label>Staff Name</label>
        <input
          type="text"
          id="staffName"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label>Staff Email</label>
        <input
          type="text"
          id="staffEmail"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <button className="btn add" onClick={addParent}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddStaff;
