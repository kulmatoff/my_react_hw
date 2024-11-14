import { ProductCard } from "./components/ProductCard";

const products = [
  {
    id: 0,
    name: "Santa",
    price: 100,
    category: "Santa Claus",
    image: "https://www.adbranch.com/wp-content/uploads/coca-cola_for_santa_1950.jpg"
  },
  {
    id: 1,
    name: "Dead MoroZ",
    price: 200,
    category: "Ded Moros",
    image: "https://chips-journal.ru/files/review/2021-11-15/WlpjAaYBR9iasu4g-SgqUfzHUO_Jjh6H_1240_832.jpg"
  }
]

function App() {
  return <div class="list-products">
    {
      products.map((e) => <ProductCard data={e}/>)
    }
  </div>
}

export default App;
