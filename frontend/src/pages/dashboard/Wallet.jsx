import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { topUpWallet, getWalletBalance } from "../../services/operations/walletAPI";

export default function Wallet() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);

  // fetch wallet balance
  const fetchBalance = async () => {
    try {
      setLoading(true);
      const res = await getWalletBalance(token);
      setBalance(res.wallet || 0);
    } catch (err) {
      console.error("Failed to fetch balance:", err.response?.data?.message || err.message);
      setBalance(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchBalance();
  }, [token]);

  // top up
  const handleTopUp = async (e) => {
    e.preventDefault();
    try {
      const res = await topUpWallet(token, Number(amount)); // <-- ensure number
      alert(res.message);
      setAmount(""); // clear input
      fetchBalance(); // refresh balance
    } catch (err) {
      alert("Top up failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow text-white">
      <h1 className="text-2xl font-bold mb-4">💰 Wallet</h1>

      <div className="mb-6">
        {loading ? (
          <p className="text-gray-400 italic">Fetching balance...</p>
        ) : (
          <p className="text-lg">
            Current Balance:{" "}
            <span
              className={`font-mono ${
                balance > 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              ${balance.toFixed(2)}
            </span>
          </p>
        )}
      </div>

      <form onSubmit={handleTopUp} className="space-y-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter top-up amount"
          className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
          min="1"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
        >
          Top Up
        </button>
      </form>
    </div>
  );
}
