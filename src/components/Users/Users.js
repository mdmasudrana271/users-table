import React, { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';

const Users = () => {

    const [users,setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> {
            setUsers(data)
        })
    },[])
    // console.log(users)

    return (
        <div className='mx-10'>
            {
                users.map(user=> <UserCard key={user.id} user={user}></UserCard>)
            }
        </div>
    );
};

export default Users;