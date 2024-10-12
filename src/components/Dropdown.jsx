import React from "react";

function Dropdown({ onChange }) {
  const coins = ["ethusdt", "bnbusdt", "dotusdt"];

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <select onChange={handleChange} className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300">
      {coins.map((coin) => (
        <option key={coin} value={coin}>
          {coin.toUpperCase()}
        </option>
      ))}
    </select>
  );
}


export default Dropdown;
