import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem({item}) {
  return <ExpenseItem {...item} />;
}

export default function ExpensesList({expenses}) {
  return (
    <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={({id}) => id}/>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
  },
});
