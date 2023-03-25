import { stocksData } from '../stocksData';
import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';

function Stock() {
  // const [stock, setStock] = useState(null);

  const params = useParams();

  const symbol = params.symbol;
  const stock = stocksData.find((currentStock) => {
    if (currentStock.symbol === symbol) return currentStock;
  });

  console.log(params);

  return (
    <div className="stockComponent">
      <h3 className="stockNameInStockComponent">{stock.name}</h3>
      <p>{symbol}</p>
      <p>Last price: {stock.lastPrice}</p>
      <p>Change: {stock.change}</p>
      <p>High: {stock.high}</p>
      <p>Low: {stock.low}</p>
      <p>Open: {stock.open}</p>
    </div>
  );
}
export default Stock;
