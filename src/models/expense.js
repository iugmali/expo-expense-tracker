class Expense {
  constructor(
    id,
    description,
    amount,
    date
  ) {
    this.id = id;
    this.description = description;
    this.amount = amount;
    this.date = new Date(date);
  }
}

export default Expense;
