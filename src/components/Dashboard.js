import { Link } from 'react-router-dom';
import { stocksData } from '../stocksData';

function Dashboard() {
  return (
    <div>
      {stocksData.map((stock) => {
        const { name, symbol } = stock;

        return (
          <Link to={`/stock/${symbol}`} key={symbol}>
            <p className="stocksList">
              {name} ({symbol})
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default Dashboard;
