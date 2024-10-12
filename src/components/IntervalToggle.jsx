import React from "react";

function IntervalToggle({ onChange }) {
  const intervals = ["1m", "3m", "5m"];

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <select onChange={handleChange} className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300">
      {intervals.map((interval) => (
        <option key={interval} value={interval}>
          {interval}
        </option>
      ))}
    </select>
  );
}


export default IntervalToggle;
