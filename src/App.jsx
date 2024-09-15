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

  // useEffect hook to fetch staff data on component mount
  useEffect(() => {
    fetch('./data/staff.json')
      .then((resp) => resp.json())
      .then((myData) => {
        console.dir(myData);
        setStaffMembers(myData);
      });
  }, []);

  // Function to update staff member
  const updateStaff = (updateData) => {
    console.dir(updateData);
    const updatedStaff = [...staffMembers];
    updatedStaff[updateData.arIndex] = {
      name: updateData.name,
      email: updateData.email,
    };
    setStaffMembers(updatedStaff);
    setCurrentStaffNum(null);
  };

  // Function to add new staff member
  const addStaff = (addData) => {
    console.dir(addData);
    const updatedStaff = [...staffMembers, addData];
    setStaffMembers(updatedStaff);
    setCurrentStaffNum(null);
  };

  // Function to delete staff member
  const deleteStaff = (updateData) => {
    console.dir(updateData);
    const updatedStaff = [...staffMembers];
    updatedStaff.splice(updateData.arIndex, 1);
    setStaffMembers(updatedStaff);
    setCurrentStaffNum(null);
  };

  // Conditionally render edit box
  let editBox;
  if (currentStaffNum === null) {
    editBox = <div>Not Set</div>;
  } else {
    editBox = (
      <EditStaff
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
      Some content
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
