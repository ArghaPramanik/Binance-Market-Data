import { useEffect, useState, useRef } from "react";

function useWebSocket(coin, interval) {
  const [data, setData] = useState({
    '1m': [],
    '3m': [],
    '5m': [],
  });
  const wsRef = useRef(null);

  useEffect(() => {
    // Close existing WebSocket if it exists
    if (wsRef.current) {
      wsRef.current.close();
    }

    const wsUrl = `wss://stream.binance.com:9443/ws/${coin}@kline_${interval}`;
    wsRef.current = new WebSocket(wsUrl);

    wsRef.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const kline = message.k;

      // Update the appropriate interval data
      setData((prevData) => ({
        ...prevData,
        [interval]: [
          ...prevData[interval],
          { time: kline.t, price: parseFloat(kline.c) },
        ],
      }));
    };

    return () => {
      wsRef.current.close();
    };
  }, [coin, interval]);

  return { data };
}

export default useWebSocket;
