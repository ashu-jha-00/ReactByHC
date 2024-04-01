import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {

    const { user } = useContext(UserContext)

    if (user)
        return (<>
            <h1>Welcome {user.username}</h1>
            <h2>{user.password}</h2>
        </>)
    else return (<p>pls login</p>)
}

export default Profile