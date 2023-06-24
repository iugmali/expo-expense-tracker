import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
