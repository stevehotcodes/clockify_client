import React from 'react'
import '../ProfileView/ProfileView.scss'
import logo from '../../assets/Clockify-logo.png'



const ProfileView = () => {
  return (
    <div className='profile-view-container'>

        <div className='profile-section-1'>
            <img src="" alt="profile pic" />
             <span>
                Ondieki Stephen Omondi
             </span>
             <span>Junior Software</span>
             
        </div>
        <div className='form-view-container'>
            <form action="" >
            <div class="main">
        <h2>IDENTITY</h2>

        <div class="card">
            <div class="card-body">
        
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>Stephen Ondieki</td>

                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>ondiekistephen00@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Place of Residence</td>
                            <td>:</td>
                            <td>Molo</td>
                        </tr>
                        <tr>
                            <td>Marital Status</td>
                            <td>:</td>
                            <td>Single</td>
                        </tr>
                        <tr>
                            <td>Job designation</td>
                            <td>:</td>
                            <td>Web Developer</td>
                        </tr>
                        <tr>
                            <td>Phone number</td>
                            <td>:</td>
                            <td>+254704453499</td>
                        </tr>
                        
                        
                    </tbody>
                </table>
                
            </div>
        </div>

      
    </div>

            </form>
        </div>



    </div>
  )
}

export default ProfileView