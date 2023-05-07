import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {

    const {transactions} = useGlobalState()

    const isIncome = (item) => item.type == "Ingreso";
    const isExpense = (item) => item.type === "Gasto";
    const incomes = transactions.filter(isIncome).map((transaction) => transaction.amount).reduce((acc, item) => (acc += item), 0);
    const expenses = transactions.filter(isExpense).map((transaction) => transaction.amount).reduce((acc, item) => (acc += item), 0);


    return (
        <>
        <div>
            <h4>Ingreso</h4>
            <p>${incomes}</p>
        </div>
        <div>
            <h4>Gasto</h4>
            <p>${expenses}</p>
        </div>
        </>
    )
}

export default IncomeExpenses