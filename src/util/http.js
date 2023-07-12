import axios from "axios";

export const httpStoreExpense = async (expenseData) => {
    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_API_BASE_URL}/expenses.json`,
      expenseData
    );
    return response.data.name;
}

export const httpFetchExpenses = async () => {
    const response = await axios.get(
      `${process.env.EXPO_PUBLIC_API_BASE_URL}/expenses.json`
    );
    const expenses = [];
    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: response.data[key].date,
            description: response.data[key].description
        };
        expenses.push(expenseObj);
    }
    return expenses;
}

export const httpUpdateExpense = (id, expenseData) => {
    return axios.put(`${process.env.EXPO_PUBLIC_API_BASE_URL}/expenses/${id}.json`, expenseData);
}

export const httpDeleteExpense = (id) => {
    return axios.delete(`${process.env.EXPO_PUBLIC_API_BASE_URL}/expenses/${id}.json`);
}
