import React from "react";
import "../Attendance/Attendance.scss";
import { BarChart } from "@mui/x-charts/BarChart";
import { useGetAllAttendanceRecordsQuery } from "../../features/Attendance/attendanceApi";
import { PuffLoader } from "react-spinners";

const Attendance = () => {
  const {
    data: attendance,
    isLoading,
    isFetching,
  } = useGetAllAttendanceRecordsQuery();
  console.log(
    `data:${attendance} , isLoading:${isLoading} ,isFetching:${isFetching}`,
  );

  return (
    <div className="attendance-container">
      <div className="title-bar">
        <span>Attendance </span>
      </div>
      <div className="content-wrapper">
        <div className="graphs"></div>
        <div className="search-add-new-btn">
          <form action=""></form>
          <div className="button-wrapper"></div>
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
                <th>Employee Name</th>
                <th>Reporting state</th>

                <th>Created At</th>
                <th>Time in</th>
                <th>Time Out</th>
                <th>No of hours worked</th>
              </tr>
            </thead>
            <tbody>
              {attendance &&
                attendance.map((record, index) => (
                  <tr key={index}>
                    <td>
                      {record.firstname} {record.lastname}
                    </td>
                    <td>{record.reporting_state}</td>
                    <td>{record.date ? Date(record.date) : "-"}</td>
                    <td>{record.time_in ? formatDate(record.time_in) : "-"}</td>
                    <td>
                      {record.time_out ? formatDate(record.time_out) : "-"}
                    </td>
                    <td>
                      {calculateTheNumberofHourWorked(
                        record.time_in,
                        record.time_out,
                      ).toFixed(4)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export const formatDate = (time) => {
  const formattedTime = new Date(time).toUTCString();
  return formattedTime;
};

export const calculateTheNumberofHourWorked = (time_in, time_out) => {
  const date1 = new Date(time_in);
  const date2 = new Date(time_out);

  const timeDifferenceInMilliseconds = date2 - date1;

  const timeDifferenceInHours = timeDifferenceInMilliseconds / (1000 * 60 * 60);

  return timeDifferenceInHours;
};

export default Attendance;
