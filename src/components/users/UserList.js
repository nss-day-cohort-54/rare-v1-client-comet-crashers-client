import React, { useEffect, useState } from "react";
import { getUsers } from "./UserManager";

export const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
            .then(usersData => 
                setUsers(usersData))
    }, 
    [])

    return (
        <>
        <h1><b>Users</b></h1>
        <div className = "users">
        {
            users.map(user => {
                return<>
                <div>{user.username} </div>
                <div>{user.first_name} {user.last_name}</div>
                <div>{user.email}</div>
                <br/>
                </>
            })
        }
        </div>
        </>
    )
}