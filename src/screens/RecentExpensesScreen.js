import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {expenses} from "../data/dummy-data";

export default function RecentExpensesScreen() {
  return (
    <ExpensesOutput expenses={expenses} expensesPeriod={'Last 7 days'} />
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
