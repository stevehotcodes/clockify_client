import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const EmployeePayrollPdf = ({userDetails}) => {
    const styles = StyleSheet.create({
        container: {
          padding: 10,
        },
        title: {
          fontSize: 16,
          marginBottom: 10,
        },
        row: {
          flexDirection: 'row',
          marginBottom: 5,
        },
        label: {
          width: 120,
        },
      });


  return (<>
    <div>EmployeePayrollPdf</div>
    <Document>
    <Page style={styles.container}>
      <Text style={styles.title}>Clockify | Payroll</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Identification Number:</Text>
        <Text>{userDetails.identification_number}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <Text>{`${userDetails.firstname} ${userDetails.lastname}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Employee Number:</Text>
        <Text>{userDetails.user_id}</Text>
        <Text style={styles.label}>Bank A/c No.:</Text>
        <Text>0x2x6x25x6</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Date of Birth:</Text>
        <Text>{`${datefullYear.getUTCFullYear()}/${datefullYear.getUTCMonth() + 1}/${datefullYear.getDate()}`}</Text>
        <Text style={styles.label}>Payroll Number:</Text>
        <Text></Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Address:</Text>
        <Text>Nyeri, Kenya</Text>
        <Text style={styles.label}>Schedule:</Text>
        <Text>Morning Shift</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Position:</Text>
        <Text>{userDetails.position_description}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Position:</Text>
        <Text>{userDetails.position_description}</Text>
      </View>





    
    </Page>
  </Document>



</>

  )
}

export default EmployeePayrollPdf





// PayrollEmployeePDF.js


// // Define styles
// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
//   title: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 5,
//   },
//   label: {
//     width: 120,
//   },
// });

// const PayrollEmployeePDF = ({ userDetails, payrollEmployeeData, datefullYear }) => (
//   <Document>
//     <Page style={styles.container}>
//       <Text style={styles.title}>Clockify | Payroll</Text>
//       <View style={styles.row}>
//         <Text style={styles.label}>Identification Number:</Text>
//         <Text>{userDetails.identification_number}</Text>
//       </View>
//       <View style={styles.row}>
//         <Text style={styles.label}>Name:</Text>
//         <Text>{`${userDetails.firstname} ${userDetails.lastname}`}</Text>
//       </View>
//       <View style={styles.row}>
//         <Text style={styles.label}>Employee Number:</Text>
//         <Text>{userDetails.user_id}</Text>
//         <Text style={styles.label}>Bank A/c No.:</Text>
//         <Text>0x2x6x25x6</Text>
//       </View>
//       <View style={styles.row}>
//         <Text style={styles.label}>Date of Birth:</Text>
//         <Text>{`${datefullYear.getUTCFullYear()}/${datefullYear.getUTCMonth() + 1}/${datefullYear.getDate()}`}</Text>
//         <Text style={styles.label}>Payroll Number:</Text>
//         <Text></Text>
//       </View>
//       <View style={styles.row}>
//         <Text style={styles.label}>Address:</Text>
//         <Text>Nyeri, Kenya</Text>
//         <Text style={styles.label}>Schedule:</Text>
//         <Text>Morning Shift</Text>
//       </View>
//       <View style={styles.row}>
//         <Text style={styles.label}>Position:</Text>
//         <Text>{userDetails.position_description}</Text>
//       </View>
//       {/* Add more rows for other details */}
//     </Page>
//   </Document>
// );

// export default PayrollEmployeePDF;
