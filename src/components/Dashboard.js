import { Link } from 'react-router-dom';
import { stocksData } from '../stocksData';

function Dashboard() {
  return (
    <div className="stocksList">
      {stocksData.map((stock) => {
        const { name, symbol } = stock;

        return (
          <Link to={`/stock/${symbol}`} key={symbol}>
            <p>
              {name} ({symbol})
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default Dashboard;
