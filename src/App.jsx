import React, { useState, useEffect } from 'react';
import './App.css';
import Staff from './Components/Staff';
import EditStaff from './Components/EditStaff';
import AddStaff from './Components/AddStaff';
import Clock from './Components/Clock';

const App = () => {
  // State for current staff number and staff members
  const [currentStaffNum, setCurrentStaffNum] = useState(null);
  const [staffMembers, setStaffMembers] = useState([]);
  const url = 'http://localhost:3000/api';
  // useEffect hook to fetch staff data on component mount
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.dir(data);
        setStaffMembers(data);
      })
      .catch((error) => console.error('Error fetching staff data:', error));
  }, []);

  // Function to update staff member
  const updateStaff = (updateData) => {
    const { id, name, email, arIndex } = updateData;

    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name, email }),
    })
      .then((resp) => resp.json())
      .then((updatedStaffMember) => {
        const updatedStaff = [...staffMembers];
        updatedStaff[arIndex] = updatedStaffMember; // Replace with updated data from API
        setStaffMembers(updatedStaff);
        setCurrentStaffNum(null);
      })
      .catch((error) => console.error('Error updating staff member:', error));
  };

  // Function to add new staff member
  const addStaff = (addData) => {
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addData),
    })
      .then((resp) => resp.json())
      .then((newStaffMember) => {
        const updatedStaff = [...staffMembers, newStaffMember]; // Add new data from API
        setStaffMembers(updatedStaff);
        setCurrentStaffNum(null);
      })
      .catch((error) => console.error('Error adding staff member:', error));
  };

  // Function to delete staff member
  const deleteStaff = (deleteData) => {
    const { id, arIndex } = deleteData;
    console.log('deleteData:', deleteData);
    fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({ id }),

    })
      .then(() => {
        const updatedStaff = [...staffMembers];
        updatedStaff.splice(arIndex, 1); // Remove the deleted item from the local state
        setStaffMembers(updatedStaff);
        setCurrentStaffNum(null);
      })
      .catch((error) => console.error('Error deleting staff member:', error));
  };

  // Conditionally render edit box
  let editBox;
  if (currentStaffNum === null) {
    editBox = <div>Not Set</div>;
  } else {
    editBox = (
      <EditStaff
        id={staffMembers[currentStaffNum].id} // Add the ID for API calls
        name={staffMembers[currentStaffNum].name}
        arIndex={currentStaffNum}
        email={staffMembers[currentStaffNum].email}
        updateEvent={updateStaff}
        deleteEvent={deleteStaff}
      />
    );
  }

  // Render staff members list
  const staffList = staffMembers.map((staff, i) => (
    <Staff key={i} name={staff.name} email={staff.email} editEvent={() => setCurrentStaffNum(i)}>
    </Staff>
  ));

  return (
    <div className="App">
      <header>
        <h1>SPA - Editor</h1>
        <div>
          <Clock />
        </div>
      </header>
      <main>
        <div className="staffGrid">{staffList}</div>
        <div className="sideBar">
          {editBox}
          <div>
            <AddStaff addEvent={addStaff} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
