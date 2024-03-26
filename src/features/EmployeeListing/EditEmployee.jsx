import React from 'react'
import { ErrorToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster'
import { useState } from 'react';
import { useGetPositionsQuery, useGetScheduleQuery } from '../Register/registerApi';
import '../EmployeeListing/EditEmployee.scss'
import {  useEditEmployeePositionMutation, useEditEmployeesScheduleMutation } from './EmployeeListing';

const EditEmployee = ({employee}) => {


    const[positionValue, setPositionValue]=useState(employee?employee.position_description:'');
    const[scheduleDescription, setScheduleDescription]=useState(employee?employee.schedule_description:'');
    const[selectedPosition, setSelectedPosition]=useState('')
    const[selectedSchedule, setSelectedSchedule]=useState('')
    const {data:positions, isError, isFetching}=useGetPositionsQuery();
    const {data:schedules}=useGetScheduleQuery();
    const [editEmployeesSchedule]=useEditEmployeesScheduleMutation()
    const[editEmployeePosition]=useEditEmployeePositionMutation()


    const handleChangeSchedule=(e)=>{
        setSelectedSchedule(e.target.value)
    }

    const handleChangePosition=(e)=>{
      setSelectedPosition(e.target.value)
    }

    const handleEditSchedule=async(e)=>{
      e.preventDefault()
       try {
          const response=await editEmployeesSchedule({schedule_id:selectedSchedule,user_id:employee.user_id}).unwrap()
          console.log(response)
          SuccessToast(response.message)
         
       } catch (error) {
          console.log(error)
          ErrorToast(error.data.message)
       }

    }



    const handleEditPosition=async(e)=>{
      e.preventDefault()
      try {
            const response=await editEmployeePosition({position_id:selectedPosition,user_id:employee.user_id})
            console.log(response)
            SuccessToast(response.message)

      } catch (error) {
         console.log(error)
          ErrorToast(error.data.message)
         
      }
    }


    console.log("selected employee",employee)
  return (
    <div className='edit-employee-container'>
    <ToasterContainer/>
            <div className='add-group-modal'>
 

 <form action=""  onSubmit={(e)=>handleEditSchedule(e)}>
   <h3 className='create-group-header'>Edit Position and Schedule for {employee.firstname} {employee.lastname}</h3>
       

        <div className="textarea">
  
        
      <div className="textarea">
         <label htmlFor=""> <h5> Current Schedule</h5>{scheduleDescription}</label>
      <select onChange={handleChangeSchedule} value={selectedSchedule}>
            <option value="">{scheduleDescription}</option>
            {schedules&&schedules.map((schedule,index)=>(
                  <option key={schedule.schedule_id} value={schedule.schedule_id}>{schedule.schedule_description}</option>
            ))}
            </select>
         </div>
            
            
         
      
        </div>

   
       
        <div className="footer">
         <div className="btn">
            <button type='submit' >Edit</button>
         </div>
         </div>
      </form>

      <form action=""  onSubmit={(e)=>{handleEditPosition(e)}}>
         <div className="textarea">
             <label> <h5> Current Position</h5>{positionValue}</label>

         <select onChange={handleChangePosition} value={selectedPosition}>
         <option value="">{positionValue}</option>
         {positions&&positions.map((position,index)=>(
         <option key={position.position_id} value={position.position_id}>{position.position_description}</option>
         ))}
      </select>
         </div>

         <div className="footer">
         <div className="btn">
            <button type='submit' >Edit</button>
         </div>
         </div>

      </form>


     
    
    </div>
    </div>
  )
}

export default EditEmployee