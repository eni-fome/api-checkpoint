import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          setListOfUsers(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="user-container">
        {listOfUsers.map(user => (
          <div key={user.id} className="user-card">
            <p className="user-name">Name: {user.name}</p> 
            <p className="user-email">Email: {user.email}</p> 
            <hr className="user-divider" />
          </div>
        ))}
      </div>
    );
  };
  
  export default UserList;