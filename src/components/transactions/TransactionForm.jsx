import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
    const { addTransaction } = useGlobalState()
    
    const types = [
        {value: '', text: '--Choose an option--'},
        {value: 'Income', text: 'Income 📈'},
        {value: 'Expense', text: 'Expense 📉'},
    ];
    const [type, setType] = useState(types[0].value)
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()
    const [amount, setAmount] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            id: window.crypto.randomUUID(),
            type,
            category,
            description,
            amount: +amount,
        })
    }

    return (
        <div>
            <form onSubmit={(onSubmit)}>
                <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                    {types.map(type => (
                        <option key={type.value} value={type.value}>
                            {type.text}
                        </option>
                    ))}
                </select>
                <input type="text" placeholder="Category"
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input type="text" placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input type="number" placeholder="00.00" step="0.01"
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button>
                    Add
                </button>
            </form>
        </div>
    );
}

export default TransactionForm;