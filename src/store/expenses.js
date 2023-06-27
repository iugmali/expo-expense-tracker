import {createSlice} from "@reduxjs/toolkit";
import {expenses} from "../data/dummy-data";

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: expenses
  },
  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random().toString();
      state.expenses.unshift({id: id, ...action.payload.expenseData});
    },
    updateExpense: (state, action) => {
      const pos = state.expenses.map(e => e.id).indexOf(action.payload.id);
      state.expenses.splice(pos, 1, {id: action.payload.id, ...action.payload.expenseData});
    },
    removeExpense: (state, action) => {
      const pos = state.expenses.map(e => e.id).indexOf(action.payload.id);
      state.expenses.splice(pos, 1);
    }
  }
})

export const addExpense = expensesSlice.actions.addExpense;
export const updateExpense = expensesSlice.actions.updateExpense;
export const removeExpense = expensesSlice.actions.removeExpense;

export default expensesSlice.reducer;
