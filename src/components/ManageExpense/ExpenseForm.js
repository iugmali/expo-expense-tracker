import {StyleSheet, Text, View} from "react-native";
import ExpenseInput from "./ExpenseInput";

export default function ExpenseForm() {
  const amountChangeHandler = () => {

  }

  const dateChangeHandler = () => {

  }

  const descriptionChangeHandler = () => {

  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <ExpenseInput
          label={'Amount'}
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler
          }}
        />
        <ExpenseInput
          label={'Date'}
          style={styles.rowInput}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: dateChangeHandler
          }}
        />
      </View>
      <ExpenseInput
        label={'Description'}
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          autoCapitalize: 'none',
          maxLength: 10,
          onChangeText: descriptionChangeHandler
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center'
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    flex: 1
  }
})
