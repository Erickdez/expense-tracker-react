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
                <select name="type" value={type} onChange={(e) => setType(e.target.value)} className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full">
                    {types.map(type => (
                        <option key={type.value} value={type.value}>
                            {type.text}
                        </option>
                    ))}
                </select>
                <input type="text" placeholder="Category"
                    onChange={(e) => setCategory(e.target.value)}
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                />
                <input type="text" placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                />
                <input type="number" placeholder="00.00" step="0.01"
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                />
                <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block w-full">
                    Add
                </button>
            </form>
        </div>
    );
}

export default TransactionForm;