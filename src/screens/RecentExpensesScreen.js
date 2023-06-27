import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {useSelector} from "react-redux";

export default function RecentExpensesScreen() {
  const expenses = useSelector((state) => state.expenses.expenses);
  return (
    <ExpensesOutput expenses={expenses} expensesPeriod={'Last 7 days'} />
  );
}
