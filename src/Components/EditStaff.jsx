import React, { useState, useEffect } from 'react';

const EditStaff = ({ name: initialName, email: initialEmail, arIndex, updateEvent, deleteEvent }) => {
  // Set up state for name and email using useState
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);

  // useEffect to update the state when props change
  useEffect(() => {
    setName(initialName);
    setEmail(initialEmail);
  }, [initialName, initialEmail]);

  // Function to handle name change
  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };

  // Function to handle email change
  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };

  // Function to update the parent component
  const updateParent = () => {
    updateEvent({
      arIndex: arIndex,
      name: name,
      email: email,
    });
  };

  // Function to delete staff in parent component
  const deleteParent = () => {
    deleteEvent({
      arIndex: arIndex,
    });
  };

  return (
    <div className="editStaff">
      <h2>Edit Staff</h2>
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
        <button className="btn edit" onClick={updateParent}>
          Update
        </button>
      </div>
      <div>
        <button className="btn del" onClick={deleteParent}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditStaff;
