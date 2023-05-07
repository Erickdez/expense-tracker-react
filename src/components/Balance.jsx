import { useGlobalState } from "../context/GlobalState"

function Balance() {
    const { transactions } = useGlobalState();

    const isIncome = (item) => item.type == "Income";
    const isExpense = (item) => item.type === "Expense";
    const incomes = transactions.filter(isIncome).map((transaction) => transaction.amount);
    const expenses = transactions.filter(isExpense).map((transaction) => transaction.amount);

    const total = incomes.reduce((acc, item) => (acc += item), 0) - expenses.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="flex justify-between">
            <h3>Balance</h3>
            <h1 className="text-2xl font-bold">${total}</h1>
        </div>
    );
}

export default Balance;