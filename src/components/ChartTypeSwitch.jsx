import React from "react";

function ChartTypeSwitch({ onChange }) {
  const handleSwitch = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label className="mr-2">Chart Type:</label>
      <select onChange={handleSwitch} className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300">
        <option value="line">Line Chart</option>
        <option value="bar">Bar Chart</option>
      </select>
    </div>
  );
}


export default ChartTypeSwitch;
