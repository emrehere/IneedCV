"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  useEffect(() => {
    const storedUserString = localStorage.getItem('token');
    const storedUser = JSON.parse(storedUserString);
    console.log(storedUser)

    // Check if storedUser is available
    if (storedUser) {
      // Update state with the user object
      setUserData(storedUser);
    } else {
      // If no user data, navigate to the signin page
      router.push('/pages/signin');
    }
  }, [router]);

  // If user data is not available, the component will navigate to signin and won't render anything
  if (!userData || Object.keys(userData).length === 0) {
    return null;
  }

  return (
    <div>
      sayfa dene
    </div>
  );
}

export default Page;
