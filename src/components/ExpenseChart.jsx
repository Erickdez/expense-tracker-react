import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

function ExpenseChart() {

    const { transactions } = useGlobalState();

    const isIncome = (item) => item.type == "Income";
    const isExpense = (item) => item.type === "Expense";
    const incomes = transactions.filter(isIncome).map((transaction) => transaction.amount).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expenses = transactions.filter(isExpense).map((transaction) => transaction.amount).reduce((acc, item) => (acc += item), 0).toFixed(2);

    const totalExpensesPercentage = Math.round((expenses / incomes) * 100);
    const totalIncomesPercentage = 100 - totalExpensesPercentage;


    return (
        <VictoryPie
            colorScale={["#e74c3c", "#2ecc71"]}
            data={[
                {x: "Expenses", y: totalExpensesPercentage},
                {x: "Incomes", y: totalIncomesPercentage},
            ]}
            animate={{
                duration: 200
            }}
            labels={({datum}) => `${datum.y}%`} //Update to specify value to use in labels
            labelComponent={<VictoryLabel
                angle={45}
                style={{
                    fill: "white",
                }}
            />}
        />
    );
}

export default ExpenseChart;