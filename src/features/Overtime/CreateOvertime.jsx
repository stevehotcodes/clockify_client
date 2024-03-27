import React from 'react'
import { useState } from 'react'
import { useCreateNewOverTimeMutation } from './overtimeApi';
import { ErrorToast, LoadingToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster';
import { useGetAllEmployeesQuery } from '../EmployeeListing/EmployeeListing';




const CreateOvertime = ({closeModal}) => {
 const[userId,setUserId]=useState('')
 const[rateperhour, setRateperHour]=useState('');
 const[numberofhours,setNumberofHours]=useState('');
 const [selectedEmployee, setemployeeValue]=useState('')
const[CreateNewOverTime]=useCreateNewOverTimeMutation()
const{data:employees}=useGetAllEmployeesQuery()

const handleEmployeeValueChange=(e)=>{
   setemployeeValue(e.target.value)
}





const handleCreateOverTime=async(e)=>{
   
    try {
        // LoadingToast(true)
        e.preventDefault()
         const ratePerHourValue=e.target.ratePerHour.value
         const userIdValue=e.target.userIdValue.value
         const numberofHoursValue=e.target.numberofHoursValue.value

        //  console.log(ratePerHourValue,userIdValue,numberofHoursValue)
        const response=await CreateNewOverTime({rate_per_hours:ratePerHourValue,number_of_hours:numberofHoursValue,user_id:selectedEmployee}).unwrap()
        SuccessToast(response.message)
        console.log(response)
        LoadingToast(false)
        
    } catch (error) {
        console.log(error)
        ErrorToast(error.data.message)
    }

}
 

  return (
    <div className='create-position-container'>
    <ToasterContainer/>
            <div className='add-group-modal'>
 

 <form action="" onSubmit={handleCreateOverTime}>
   <h3 className='create-group-header'>Create Overtime</h3>
    <div className="textarea">
        <input  type='number' placeholder='rate per hour ' id='ratePerHour'
           onChange={(e)=>{setRateperHour(e.target.value)}}
        
        />

        </div>

   <div className="textarea">
      <input type="number" placeholder='number of hours' id='numberofHoursValue'
            onChange={(e)=>{setNumberofHours(e.target.value)}}
         
         />
   </div>

   <div className="textarea">
    
         <select  onChange={handleEmployeeValueChange} value={selectedEmployee}>
                                        <option value="">Select employee</option>
                                        {employees&&employees.map((employee,index)=>(
                                             <option key={employee.user_id} value={employee.user_id}>{employee.firstname} {employee.lastname}</option>
                                        ))}
                                    </select>
   </div>
  
       
        <div className="footer">
         <div className="btn">
            <button type='submit' >Create</button>
         </div>
         </div>
      </form>


   
   
   
      
    
    </div>
    </div>
  )
}

export default CreateOvertime