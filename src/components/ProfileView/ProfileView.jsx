import React from "react";
import "../ProfileView/ProfileView.scss";
import logo from "../../assets/Clockify-logo.png";

const ProfileView = ({ employee }) => {
  console.log(employee);
  return (
    <div className="profile-view-container">
      <div className="profile-section-1">
        <img src="" alt="profile pic" />
        <span>
          {employee.firstname} {employee.lastname}
        </span>
        <span>{employee.position_description}</span>
      </div>
      <div className="form-view-container">
        <form action="">
          <div class="main">
            <h2>IDENTITY</h2>

            <div class="card">
              <div class="card-body">
                <table>
                  <tbody>
                    <tr>
                      <td>Full Name</td>
                      <td>:</td>
                      <td>
                        {employee.firstname} {employee.middlename}{" "}
                        {employee.lastname}
                      </td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>{employee.email}</td>
                    </tr>
                    <tr>
                      <td>Place of Residence</td>
                      <td>:</td>
                      <td>{employee.place_of_residence}</td>
                    </tr>
                    <tr>
                      <td>Marital Status</td>
                      <td>:</td>
                      <td>{employee.marital_status}</td>
                    </tr>
                    <tr>
                      <td>Job designation</td>
                      <td>:</td>
                      <td>{employee.position_description}</td>
                    </tr>
                    <tr>
                      <td>Phone number</td>
                      <td>:</td>
                      <td>{employee.phone_number}</td>
                    </tr>
                    <tr>
                      <td>Schedule</td>
                      <td>:</td>
                      <td>{employee.schedule_description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileView;
