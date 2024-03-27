import React from 'react'
import '../Schedules/Schedules.scss'
import '../Positions/Positions.scss'
import Modal from '../../components/Modal/Modal';
import CreateSchedule from '../../features/Schedule/CreateSchedule';
import { useState } from 'react';
import { useGetAllSchedulesQuery, useGetEmployeesByScheduleQuery } from '../../features/Schedule/scheduleApi';
import {PuffLoader} from 'react-spinners'
import { formatDate } from '../Attendance/Attendance';


const Schedules = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [isScheduleModalOpen, setScheduleModalOpen]=useState(false)
    const [selectedSchedule, setSelectedSchedule]=useState('')
    const[Loading,setLoading]=useState(false)
    
    const {data:schedule, isError, isLoading, isFetching}=useGetAllSchedulesQuery()
    const {data:employeesBySchedules ,isLoading:employeeLoading, isFetching:employeeFetching}=useGetEmployeesByScheduleQuery(selectedSchedule)

    console.log(`${employeesBySchedules}, ${isLoading}, ${isError}`)



    const openModal = () => {
        setScheduleModalOpen(true);
      };
    
      const closeModal = () => {
        setScheduleModalOpen(false);
      };


    const handleViewEmployeesInThisShift=(selection)=>{
        setLoading(true)
        setSelectedSchedule(selection);
        setTimeout(()=>{
            setLoading(false)
        
        },4000)
        
    }


  return (
    <div className='schedule-container'> 
    
              <div className='title-bar'>
            <span>Schedules</span>
        </div>

        <div className='content-wrapper'>
        <div className='search-add-new-btn'>
                <form action="">
                        <input type="search" name="" id="" placeholder='search for an position' />
                </form>
                <div  className='button-wrapper'>
                        <button className='add-new-btn' onClick={openModal}> Add New</button>
                        {
                            isScheduleModalOpen&&(
                                <Modal onClose={closeModal}>
                                    <CreateSchedule closeModal={closeModal}/>

                                </Modal>
                            )
                        }
                </div>

               
            </div>
            {(isLoading)? (<div className="status-loader">
            <div className='status-loader-content'>
               <PuffLoader loading={true} size={150} />
                <p>Please wait .........</p>
             </div>
           </div>):  <table>
                <thead>
                    <tr>
                        <th>Schedules</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule&&schedule.map((item, index)=>(
                          <tr key={index}> 
                          <td>{item?`${formatDate2(item.in_time).formattedStandardHours}h` :'-'}-{item?`${formatDate2(item.out_time).formattedStandardHours}h`:'-'}</td>
                          <td>{item.schedule_description}</td>
                          <td><button  onClick={()=>handleViewEmployeesInThisShift(item)}> View Employees in this Shift</button></td>
                          
                      </tr>

                    ))}
                  
                   
                    

                    
                   
                </tbody>
            </table>}
            <th>Employees in {selectedSchedule.schedule_description}</th>
            <table>
               
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Schedule Time Bound</th>
                        <th>Last Check In</th>
                        <th>Last Check Out</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                {(Loading)? (
            <div className=''>
               <PuffLoader loading={true} size={150} />
                <p>Please wait .........</p>
             </div>
           ):
                (!employeeFetching&&employeesBySchedules)?employeesBySchedules.map((item, index)=>(
                          <tr key={index}> 
                          <td>{item.firstname} {item.lastname}</td>
                          <td>{item.schedule_in_time?`${formatDate2(item.schedule_in_time).formattedStandardHours} ${formatDate2(item.schedule_out_time).formattedStandardMinutes}h`:null}-{item.schedule_out_time?`${formatDate2(item.schedule_out_time).formattedStandardHours} ${formatDate2(item.schedule_out_time).formattedStandardMinutes}h`:''}</td>
                          <td>{item.last_clock_in_time?`${formatDate2(item.last_clock_in_time).formattedStandardHours} ${formatDate2(item.last_clock_in_time).formattedStandardMinutes}h`:'-'}</td>
                          <td>{item.last_clock_out_time?`${formatDate2(item.last_clock_out_time).formattedStandardHours} ${formatDate2(item.last_clock_out_time).formattedStandardMinutes}h`:'-'}</td>
                          <td>{item.last_clock_in_time?`${formatDate(item.last_clock_in_time)}`:'-'}</td>
                      </tr>

                    )):<h3>No records</h3>}
                </tbody>
            </table>

        </div>

    
    
    
    </div>
  )
}



// export  const formatDate = (time) => {
//     const formattedTime = new Date(time)
//     const formattedStandardHours=formattedTime.getUTCHours()
    
//     return formattedStandardHours ;
// };

export  const formatDate2 = (time) => {
    const formattedTime = new Date(time)
    const formattedStandardHours=formattedTime.getUTCHours()
    const formattedStandardMinutes=formattedTime.getUTCMinutes()
    return {formattedStandardHours ,formattedStandardMinutes};
};






export default Schedules