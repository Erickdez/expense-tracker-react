import { useGlobalState } from "../context/GlobalState"

function Balance() {
    const { transactions } = useGlobalState();

    const isIncome = (item) => item.type == "Ingreso";
    const isExpense = (item) => item.type === "Gasto";
    const incomes = transactions.filter(isIncome).map((transaction) => transaction.amount);
    const expenses = transactions.filter(isExpense).map((transaction) => transaction.amount);

    const total = incomes.reduce((acc, item) => (acc += item), 0) - expenses.reduce((acc, item) => (acc += item), 0)

    return (
        <div>
            <h1>Balance</h1>
            <h3>${total}</h3>
        </div>
    );
}

export default Balance;