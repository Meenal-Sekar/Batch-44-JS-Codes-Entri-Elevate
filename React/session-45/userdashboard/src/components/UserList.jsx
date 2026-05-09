import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import { getUsers } from '../services/app'
import UserCard from '../components/UserCard'
function UserList()
{

    const[users,setUsers]=useState([])
    //current state variable  setUsers -- function to update statevariable

    const[loading,setLoading]=useState(true);

    useEffect(()=>
    {
        
     const fetchUsers = async () =>
        {
      const response = await getUsers()


      setUsers(response);
      setLoading(false);
    };

    fetchUsers();

    },[])

    if(loading)  return <Loader/>

  return (
    <>
        <div className="grid gap-6 p-6
      sm:grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3">

        {users.map((a1)=>
        <UserCard key={a1.id} user={a1} />

        )}

        </div>
    </>
  )
}

export default UserList


//let users=[]    // 10 records   