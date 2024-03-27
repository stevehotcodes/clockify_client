import React from 'react'
import '../MainLayout/MainLayout.scss'
import useLocalStorage from '../../hooks/useLocalStorage';
import { useState } from 'react';
import EmployeeHome from '../EmployeeHome/EmployeeHome';
import AdminHome from '../Admin-Home/AdminHome';

const MainLayout = () => {
    const [userDetails, setUserDetails] = useLocalStorage('user', null);
    const [token, setToken] = useLocalStorage('token ', null);
    const[isAdmin, setAdmin]=useState('')


    console.log(`isAdmin:${isAdmin},token:${token},userDetails:${userDetails.role}`)


  return (
    <>
    {((token && userDetails?.role === 'user') ? <EmployeeHome/> : <AdminHome/>)}
    {(!token) ? <div>Not Authorized</div> :
        (userDetails && userDetails.role === 'user') ? 
            null : 
            (!userDetails) ? 
                <div className="status-loader">
                    <div className='status-loader-content'>
                        <PuffLoader loading={true} size={150} />
                        <p>Please wait .........</p>
                    </div>
                </div> : ''
    }
</>


  )
}

export default MainLayout