import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {useSelector} from "react-redux";

export default function AllExpensesScreen() {
  const expenses = useSelector((state) => state.expenses.expenses);
  return (
    <ExpensesOutput expenses={expenses} expensesPeriod={'Total'} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
