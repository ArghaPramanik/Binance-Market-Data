export function saveChartData(coin, data) {
    localStorage.setItem(coin, JSON.stringify(data));
  }
  
  export function getChartData(coin) {
    const data = localStorage.getItem(coin);
    return data ? JSON.parse(data) : [];
  }
  