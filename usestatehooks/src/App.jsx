import React, { useState } from 'react';

const UserData = () => {
  const [users, setUsers] = useState([
    { Name: "John", Id: "1", Email: "john@example.com", ContactNo: "1234567890", Age: 30 },
    { Name: "Alice", Id: "2", Email: "alice@example.com", ContactNo: "9876543210", Age: 25 },

  ]);
  const [searchId, setSearchId] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  const searchUser = () => {
    const foundUser = users.find(user => user.Id === searchId);
    setUserDetails(foundUser);
  };

  return (
    <div>
      <h2>User Search</h2>
      <form onSubmit={(e) => { e.preventDefault(); searchUser(); }}>
        <label htmlFor="userId">Enter User ID:</label>
        <input
          type="text"
          id="userId"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {userDetails && (
        <div>
          <h3>User Details:</h3>
          <p><strong>Name:</strong> {userDetails.Name}</p>
          <p><strong>ID:</strong> {userDetails.Id}</p>
          <p><strong>Email:</strong> {userDetails.Email}</p>
          <p><strong>Contact No:</strong> {userDetails.ContactNo}</p>
          <p><strong>Age:</strong> {userDetails.Age}</p>
        </div>
      )}

      {userDetails === null && <p>User not found!</p>}
    </div>
  );
};

export default UserData;
