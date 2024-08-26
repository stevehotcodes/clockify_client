import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  table: {
    marginBottom: 10,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  cellLabel: {
    width: "50%",
    paddingRight: 5,
    fontWeight: "bold",
    color: "#555555",
  },
  cellValue: {
    width: "50%",
    paddingLeft: 5,
    color: "#222222",
  },
});

const EmployeePayrollPdf = ({
  userDetails,
  payrollEmployeeData,
  datefullYear,
}) => {
  // Format date of birth
  const dateofBirth = new Date(userDetails.date_of_birth);
  const formattedDOB = {
    date: dateofBirth.getUTCDate(),
    month: dateofBirth.getUTCMonth(),
    year: dateofBirth.getUTCFullYear(),
  };

  //   const datefullYear = new Date();

  return (
    <Document>
      <Page size="A2" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Clockify | Payroll</Text>
          <Text></Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Identification Number:</Text>
              <Text style={styles.cellValue}>
                {userDetails.identification_number}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Name:</Text>
              <Text
                style={styles.cellValue}
              >{`${userDetails.firstname} ${userDetails.lastname}`}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Employee Number:</Text>
              <Text style={styles.cellValue}>{userDetails.user_id}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Bank A/c No.:</Text>
              <Text style={styles.cellValue}>0x2x6x25x6</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Date of Birth:</Text>
              <Text
                style={styles.cellValue}
              >{`${formattedDOB.date}/${formattedDOB.month}/${formattedDOB.year}`}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Address:</Text>
              <Text style={styles.cellValue}>Nyeri, Kenya</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Schedule:</Text>
              <Text style={styles.cellValue}>
                {userDetails.schedule_description}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Position:</Text>
              <Text style={styles.cellValue}>
                {userDetails.position_description}
              </Text>
            </View>
          </View>
          {/* Additional table for earnings and deductions */}
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Earnings</Text>
              <Text style={styles.cellValue}>Amount</Text>
              <Text style={styles.cellLabel}>Deductions</Text>
              <Text style={styles.cellValue}>Amount</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Gross Salary</Text>
              <Text style={styles.cellValue}>
                {payrollEmployeeData
                  ? payrollEmployeeData[0].gross_salary
                  : "-"}
              </Text>
              <Text style={styles.cellLabel}>NSSF</Text>
              <Text style={styles.cellValue}>-</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Overtime</Text>
              <Text style={styles.cellValue}>
                {payrollEmployeeData
                  ? payrollEmployeeData[0].total_overtime
                  : "-"}
              </Text>
              <Text style={styles.cellLabel}>Income tax</Text>
              <Text style={styles.cellValue}>-</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Special Allowance</Text>
              <Text style={styles.cellValue}>-</Text>
              <Text style={styles.cellLabel}>Cash Advance</Text>
              <Text style={styles.cellValue}>
                {payrollEmployeeData
                  ? payrollEmployeeData[0].total_cash_advances
                  : "-"}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Gross Earnings</Text>
              <Text style={styles.cellValue}>
                Ksh:{" "}
                {payrollEmployeeData
                  ? payrollEmployeeData[0].gross_salary +
                    payrollEmployeeData[0].total_overtime
                  : "-"}
              </Text>
              <Text style={styles.cellLabel}>Gross Deductions</Text>
              <Text style={styles.cellValue}>
                Ksh.
                {payrollEmployeeData
                  ? payrollEmployeeData[0].total_deductions
                  : "-"}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}></Text>
              <Text style={styles.value}>NET PAY:</Text>
              <Text style={styles.value}>
                {payrollEmployeeData ? payrollEmployeeData[0].net_pay : "-"}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default EmployeePayrollPdf;
