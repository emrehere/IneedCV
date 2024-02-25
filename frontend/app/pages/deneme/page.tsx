"use client"
import React, { useEffect, useState } from 'react';

function Page() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const storedUserString = localStorage.getItem('user');
    const storedUser = JSON.parse(storedUserString);

    // Check if storedUser is available
    if (storedUser) {
      // Update state with the user object
      setUserData(storedUser);
    }
  }, []);

  return (
    <div>
      sayfa aq dene
      <p>Email: {userData.email}</p>
      <p>Token: {userData.token}</p>
      <p>ID: {userData.id}</p>
    </div>
  );
}

export default Page;
