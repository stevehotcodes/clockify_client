import React from "react";
import "../EmployeeListing/EmployeeListing.scss";
import { Link } from "react-router-dom";
import { useGetAllEmployeesQuery } from "../../features/EmployeeListing/EmployeeListing";
import { PuffLoader } from "react-spinners";
import { useState } from "react";
import { formatDate } from "../Attendance/Attendance";
import Modal from "../../components/Modal/Modal";
import ProfileView from "../../components/ProfileView/ProfileView";
import EditEmployee from "../../features/EmployeeListing/EditEmployee";

const EmployeeListing = () => {
  const {
    data: employees,
    isError,
    isLoading,
    isFetching,
  } = useGetAllEmployeesQuery();
  const [selectedPerson, setSelectedPerson] = useState("");
  const [selectedPersonToBeEdited, setSelectedPersonToBeEdited] = useState("");
  const [isViewProfileOpen, setIsViewProfileOpen] = useState(false);
  const [isEditEmployeeModalOpen, setEditEmployeeModalOpen] = useState(false);

  console.log(`data:${employees}, isError:${isError}, isLoading:${isLoading}`);

  const openViewProfileModal = (item) => {
    setIsViewProfileOpen(true);
    setSelectedPerson(item);
  };

  const closeViewProfileModal = () => {
    setIsViewProfileOpen(false);
  };

  const openEditEmployeeModal = (item) => {
    setEditEmployeeModalOpen(true);
    setSelectedPersonToBeEdited(item);
    // console.log(selectedPersonToBeEdited)
  };

  const closeEditEmployeeModal = () => {
    setEditEmployeeModalOpen(false);
  };

  console.log("employees", employees);

  return (
    <div className="employee-listing-container">
      <div className="title-bar">
        <span>Employee Listing </span>
      </div>
      <div className="content-wrapper">
        <div className="search-add-new-btn">
          <form action="">
            <input
              type="search"
              name=""
              id=""
              placeholder="search for an employee"
            />
          </form>
          <div className="button-wrapper">
            <button className="add-new-btn">
              <Link to="/signup">Add New</Link>
            </button>
          </div>
        </div>
        {isLoading ? (
          <div className="status-loader">
            <div className="status-loader-content">
              <PuffLoader loading={true} size={150} />
              <p>Please wait .........</p>
            </div>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Position</th>
                <th>Address</th>
                <th>Telephone</th>
                <th>Date of Birth</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees ? (
                employees.map((item, index) => (
                  <tr key={index}>
                    <td>{item.identification_number}</td>
                    <td>
                      {item.firstname} {item.lastname}
                    </td>
                    <td>{item.position_description}</td>
                    <td>{item.place_of_residence}</td>
                    <td>{item.phone_number}</td>
                    <td>
                      {item ? formatDate(item.date_of_birth) : "dd/mm/yyyy"}
                    </td>

                    <td>
                      <button onClick={() => openViewProfileModal(item)}>
                        View
                      </button>
                      {isViewProfileOpen && (
                        <Modal onClose={closeViewProfileModal}>
                          <ProfileView employee={selectedPerson} />
                        </Modal>
                      )}
                      <button onClick={(e) => openEditEmployeeModal(item)}>
                        Edit{" "}
                      </button>
                      {isEditEmployeeModalOpen && (
                        <Modal onClose={closeEditEmployeeModal}>
                          <EditEmployee employee={selectedPersonToBeEdited} />
                        </Modal>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <PuffLoader loading={true} size={150} />
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EmployeeListing;
