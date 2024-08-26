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
    display: "table",
    width: "auto",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  tableCellHeader: {
    width: "20%",
    borderRightWidth: 1,
    borderRightColor: "#cccccc",
    padding: 5,
    backgroundColor: "#f2f2f2",
    fontWeight: "bolder",
  },
  tableCell: {
    width: "20%",
    borderRightWidth: 1,
    borderRightColor: "#cccccc",
    padding: 5,
    wordWrap: true,
  },
  lastTableCell: {
    width: "20%",
    padding: 10,
    wordWrap: true,
  },
  value: {
    color: "#222222",
  },
});

const datefullYear = new Date();

const PayrollPdf = ({ payRecords }) => (
  <Document>
    <Page size="A1" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>
          Payroll Records for{" "}
          {`${datefullYear.getUTCFullYear()}/${datefullYear.getUTCMonth() + 1}/${datefullYear.getDate()}`}
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellHeader}>National ID/Passport No.</Text>
            <Text style={styles.tableCellHeader}>Employee Name</Text>

            <Text style={styles.tableCellHeader}>Overtime</Text>
            <Text style={styles.tableCellHeader}>Gross Pay</Text>
            <Text style={styles.tableCellHeader}>Deductions</Text>
            <Text style={styles.tableCellHeader}>Advance Pay</Text>
            <Text style={styles.lastTableCell}>Net Pay</Text>
          </View>
          {payRecords.map((record, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>
                <Text style={styles.value}>{record.identification_number}</Text>
              </Text>
              <Text style={styles.tableCell}>
                <Text style={styles.value}>
                  {record.firstname} {record.lastname}
                </Text>
              </Text>

              <Text style={styles.tableCell}>
                <Text style={styles.value}>{record.total_overtime}</Text>
              </Text>
              <Text style={styles.tableCell}>
                <Text style={styles.value}>{record.gross_salary}</Text>
              </Text>
              <Text style={styles.tableCell}>
                <Text style={styles.value}>{record.total_deductions}</Text>
              </Text>
              <Text style={styles.tableCell}>
                <Text style={styles.value}>{record.total_cash_advances}</Text>
              </Text>
              <Text style={styles.lastTableCell}>
                <Text style={styles.value}>{record.net_pay}</Text>
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default PayrollPdf;
