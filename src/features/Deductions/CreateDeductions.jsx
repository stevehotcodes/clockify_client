import React from "react";
import "../Deductions/CreatDedcutions.scss";
import { useState } from "react";
import {
  ErrorToast,
  LoadingToast,
  SuccessToast,
  ToasterContainer,
} from "../../components/Toaster/Toaster";
import { useCreateNewDeductionMutation } from "./deductionsApi";
import { useNavigate } from "react-router-dom";
import { useGetAllEmployeesQuery } from "../EmployeeListing/EmployeeListing";

const CreateDeductions = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [user_id, setUserID] = useState("");
  const [selectedEmployee, setEmployeeValueChange] = useState("");
  const { data: employees } = useGetAllEmployeesQuery();
  const [createNewDeduction] = useCreateNewDeductionMutation();

  const navigate = useNavigate();
  const handleEmployeeValueChange = (e) => {
    setEmployeeValueChange(e.target.value);
  };

  const handleCreateDeduction = async (e) => {
    e.preventDefault();

    const descriptionValue = e.target.description.value;
    const amountValue = e.target.amount.value;
    const userIdValue = e.target.user_id.value;

    console.log(descriptionValue, amountValue, userIdValue);

    try {
      // LoadingToast(true)
      if (descriptionValue == "" || amountValue == "")
        ErrorToast(
          "input fields cannot be empty. Please input the required data",
        );
      else {
        const response = await createNewDeduction({
          description: descriptionValue,
          amount: amountValue,
          user_id: selectedEmployee,
        }).unwrap();
        SuccessToast(response.message);
        LoadingToast(false);

        e.target.reset();
        navigate("/deductions");
      }
    } catch (error) {
      console.log(error);
      ErrorToast(error.data.message);
      LoadingToast(true);
    } finally {
      LoadingToast(false);
    }
  };

  return (
    <div className="create-position-container">
      <ToasterContainer />
      <div className="add-group-modal">
        <form action="" onSubmit={handleCreateDeduction}>
          <h3 className="create-group-header">Create Deductions</h3>
          <div className="textarea">
            <input
              type="text"
              placeholder="description "
              id="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>

          <div className="textarea">
            <input
              type="number"
              placeholder="amount"
              id="amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>

          <div className="textarea">
            <select
              onChange={handleEmployeeValueChange}
              value={selectedEmployee}
            >
              <option value="">Select employee</option>
              {employees &&
                employees.map((employee, index) => (
                  <option key={employee.user_id} value={employee.user_id}>
                    {employee.firstname} {employee.lastname}
                  </option>
                ))}
            </select>
          </div>

          <div className="footer">
            <div className="btn">
              <button type="submit">Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDeductions;
