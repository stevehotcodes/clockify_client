
import React, { useRef } from 'react';
import '../Payroll/Payroll.scss';
import { useGetPayRollRecordsQuery } from '../../features/Payroll/payrollApi';
import { PuffLoader } from 'react-spinners';
import ReactToPrint from 'react-to-print';
import { PDFViewer } from '@react-pdf/renderer';
import PayrollPdf from '../../components/PayrollPdf/PayrollPdf'; 


const Payroll = () => {
  const { data: payRecords, isLoading, isFetching } = useGetPayRollRecordsQuery();
  const payrollRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="payroll-container" ref={payrollRef}>
      <div className="title-bar">
        <span>Payroll </span>
      </div>

      <div className="content-wrapper">
        <div className="search-add-new-btn">
          <div className="button-wrapper">
            <button className="add-new-btn" onClick={handlePrint}>
              Export to PDF
            </button>
            <ReactToPrint
              trigger={() => <button>Print</button>}
              content={() => payrollRef.current}
            />
          </div>
        </div>
        {isLoading || isFetching ? (
          <div className="status-loader">
            <div className="status-loader-content">
              <PuffLoader loading={true} size={150} />
              <p>Please wait .........</p>
            </div>
          </div>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Employee Id</th>
                  <th>Employee Name</th>
                
                  <th>Overtime</th>
                  <th>Gross Pay</th>
                  <th>Deductions</th>
                  <th>Advance Pay</th>
                  <th>Net Pay</th>
                  
                </tr>
              </thead>
              <tbody>
                {payRecords &&
                  payRecords.map((payRecord, index) => (
                    <tr key={index}>
                      <td>{payRecord.payroll_id}</td>
                      <td>{payRecord.firstname} {payRecord.lastname}</td>
                      
                      <td>{payRecord.total_overtime}</td>
                      <td>{payRecord.gross_salary}</td>
                      <td>{payRecord.total_deductions}</td>
                      <td>{payRecord.total_cash_advances}</td>
                      <td>{payRecord.net_pay}</td>
                      
                    </tr>
                  ))}
              </tbody>
            </table>
            <PDFViewer style={{ width: '100%', height: '500px' }}>
              <PayrollPdf payRecords={payRecords} />
            </PDFViewer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payroll;
