import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import {GlobalStyles} from "../../constants/styles";

export default function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700
  },
  text: {
  },
});
