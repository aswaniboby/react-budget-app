import { useState } from "react";
import "./index.css";

function App() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (e) => {
    e.preventDefault();

    if (!text || !amount) {
      alert("Please fill all fields");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Number(amount),
    };

    setTransactions([newTransaction, ...transactions]);
    setText("");
    setAmount("");
  };

  const balance = transactions.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  return (
    <div className="container">
      <h1>Budget Tracker 💰</h1>
      <h2>Balance: ₹{balance}</h2>

      <form onSubmit={addTransaction}>
        <input
          type="text"
          placeholder="Enter description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter amount (+income, -expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add Transaction</button>
      </form>

      <ul>
        {transactions.map((item) => (
          <li key={item.id}>
            {item.text} : ₹{item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

