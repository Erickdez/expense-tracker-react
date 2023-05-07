import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {

    const {transactions} = useGlobalState()

    const isIncome = (item) => item.type == "Income";
    const isExpense = (item) => item.type === "Expense";
    const incomes = transactions.filter(isIncome).map((transaction) => transaction.amount).reduce((acc, item) => (acc += item), 0);
    const expenses = transactions.filter(isExpense).map((transaction) => transaction.amount).reduce((acc, item) => (acc += item), 0);


    return (
        <>
        <div>
            <h4>Income</h4>
            <p>${incomes}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p>${expenses}</p>
        </div>
        </>
    )
}

export default IncomeExpenses