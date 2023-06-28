import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from "../constants/styles";
import Button from "../components/UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {addExpense, removeExpense, updateExpense} from "../store/expenses";
import {getFormattedDate} from "../util/date";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

export default function ManageExpenseScreen({route, navigation}) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const dispatch = useDispatch();

  const expenses = useSelector((state) => state.expenses.expenses);
  const selectedExpense = expenses.find(expense => expense.id === editedExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing]);

  function deleteHandler() {
    dispatch(removeExpense({id: editedExpenseId}));
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editedExpenseId,
          expenseData: expenseData
        })
      );
    } else {
      dispatch(
        addExpense({
          expenseData: expenseData
        })
      );
    }
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  const submitLabel = isEditing ? 'Update' : 'Add';

  return (
    <View style={styles.container}>
      <ExpenseForm defaultValues={selectedExpense} onCancel={cancelHandler} onSubmit={confirmHandler} submitLabel={submitLabel} />
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
})
