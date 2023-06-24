import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ExpensesSummary({expenses, periodName}) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{periodName}</Text>
      <Text style={styles.text}>${expensesSum.toFixed(2)}</Text>
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
