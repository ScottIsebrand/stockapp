import { Link } from 'react-router-dom';
import { stocksData } from '../stocksData';

function Dashboard() {
  return (
    <div className="stocksList">
      <h4>Your Stocks Dashboard:</h4>
      {stocksData.map((stock) => {
        const { name, symbol, lastPrice, change, high, low, open } = stock;

        return (
          <div>
            <p>
              <Link to={`/stock/${symbol}`} key={symbol}>
                {name} ({symbol})
              </Link>
              . Last Price: {lastPrice}. Change: {change}. High: {high}. Low:{' '}
              {low}. Open: {open}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard;
