import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import IntervalToggle from "../components/IntervalToggle";
import Chart from "../components/Chart";
import ChartTypeSwitch from "../components/ChartTypeSwitch";


function Home() {
  const [selectedCoin, setSelectedCoin] = useState("ethusdt");
  const [interval, setInterval] = useState("1m");
  const [chartType, setChartType] = useState("line");

  return (
    <div
      className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen"
      style={{
        background: "#DAE2F8",
        background: "-webkit-linear-gradient(to right, #D6A4A4, #DAE2F8) ",
        background: "linear-gradient(to right, #D6A4A4, #DAE2F8)",
      }}
    >

      <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-8 text-center">Binance Market Data WebSocket Implementation</h1>
        <div className="flex flex-col md:flex-row gap-4 mb-4 w-full justify-center">
          <Dropdown onChange={setSelectedCoin} />
          <IntervalToggle onChange={setInterval} />
          <ChartTypeSwitch onChange={setChartType} />
        </div>
        <Chart coin={selectedCoin} interval={interval} chartType={chartType} />
      </div>
    </div>
  );
}

export default Home;
