import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from "../constants/styles";
import Button from "../components/UI/Button";
import {useDispatch} from "react-redux";
import {addExpense, removeExpense, updateExpense} from "../store/expenses";
import {getFormattedDate} from "../util/date";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

export default function ManageExpenseScreen({route, navigation}) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing]);

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editedExpenseId,
          expenseData: {
            description: 'Test',
            amount: 19.99,
            date: getFormattedDate(new Date())
          }
        })
      );
    } else {
      dispatch(
        addExpense({
          expenseData: {
              description: 'Test',
              amount: 19.99,
              date: getFormattedDate(new Date())
          }
        })
      );
    }
    navigation.goBack();
  }

  function deleteHandler() {
    dispatch(removeExpense({id: editedExpenseId}));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttons}>
        <Button style={styles.button} mode={'flat'} onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} mode={''} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      {isEditing && <View style={styles.deleteContainer}><IconButton icon={'trash'} color={GlobalStyles.colors.error500} size={36} onPress={deleteHandler} /></View> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
})
