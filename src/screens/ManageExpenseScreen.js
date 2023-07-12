import React, {useLayoutEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from "../constants/styles";
import {useDispatch, useSelector} from "react-redux";
import {addExpense, removeExpense, updateExpense} from "../store/expenses";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import {httpDeleteExpense, httpStoreExpense, httpUpdateExpense} from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default function ManageExpenseScreen({route, navigation}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

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

  async function deleteHandler() {
    setIsSubmitting(true);
    try {
      await httpDeleteExpense(editedExpenseId);
      dispatch(removeExpense({id: editedExpenseId}));
      navigation.goBack();
    } catch (error) {
      setError('Could not delete expense.');
      setIsSubmitting(false);
    }
  }

  async function confirmHandler(expenseData) {
    setIsSubmitting(true);
    if (isEditing) {
      try {
        await httpUpdateExpense(editedExpenseId, expenseData);
        dispatch(
          updateExpense({
            id: editedExpenseId,
            expenseData: expenseData
          })
        );
        navigation.goBack();
      } catch (error) {
        setError('Could not update expense.');
        setIsSubmitting(false);
      }
    } else {
      try {
        const id = await httpStoreExpense(expenseData);
        dispatch(
          addExpense({
            expenseData: {id: id, ...expenseData}
          })
        );
        navigation.goBack();
      } catch (error) {
        setError('Could not create expense.');
        setIsSubmitting(false);
      }
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function errorHandler() {
    setError(null);
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
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
