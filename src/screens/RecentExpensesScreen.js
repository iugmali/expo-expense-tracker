import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {useSelector} from "react-redux";
import {getDateMinusDays} from "../util/date";

export default function RecentExpensesScreen() {
  const expenses = useSelector((state) => state.expenses.expenses);
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return (new Date(expense.date) >= date7DaysAgo) && (new Date(expense.date) <= today);
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={'Last 7 days'}
      fallbackText={'No expenses registered for the last 7 days.'}
    />
  );
}
