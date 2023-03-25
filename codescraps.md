### Stock.js scrap

function Stock() {
const [stock, setStock] = useState(null);

return (

<div>
<h1>{stock.name}</h1>
</div>
);
}
export default Stock;

### Stock.js progress

// import { stocksData } from '../stocksData';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'react';

function Stock() {
const [stock, setStock] = useState();

const params = useParams();
console.log(params);

const symbol = params.symbol;

const url = `http://localhost:3000/stock/${symbol}`;

const getStock = async () => {
try {
const response = await axios.get(url);
setStock(response.data);
} catch (error) {
console.log(error);
}
};

useEffect(() => {
getStock();
}, []);

// const loaded = () => {
return (
<div>
<p>{stock}</p>
</div>
);
// };

// const loading = () => <h1>Loading...</h1>;
// return stock ? loaded() : loading();
}
export default Stock;
