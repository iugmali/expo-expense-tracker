import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

function renderExpenseItem({item}) {
  return <Text>{item.description}</Text>;
}

export default function ExpensesList({expenses}) {
  return (
    <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={({id}) => id}/>
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
