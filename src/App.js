import { useState, useEffect } from "react";
import { ProductCard } from "./components/ProductCard";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .finally(() => setLoading(false));
  }, []);

  return (<div className="list-products">
    {loading && <img src="https://media.tenor.com/xdnqVxS6wu4AAAAM/bored-fidget-spinner.gif"></img>}
    { 
      products.map((e) => <ProductCard data={e}/>)
    }
  </div>)
}

export default App;
