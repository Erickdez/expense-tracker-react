import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {

    const {transactions} = useGlobalState()

    const isIncome = (item) => item.type == "Income";
    const isExpense = (item) => item.type === "Expense";
    const incomes = transactions.filter(isIncome).map((transaction) => transaction.amount).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expenses = transactions.filter(isExpense).map((transaction) => transaction.amount).reduce((acc, item) => (acc += item), 0).toFixed(2);


    return (
        <>
        <div className="flex justify-between my-2">
            <h4>Income</h4>
            <p>${incomes}</p>
        </div>
        <div className="flex justify-between my-2">
            <h4>Expense</h4>
            <p>${expenses}</p>
        </div>
        </>
    )
}

export default IncomeExpenses