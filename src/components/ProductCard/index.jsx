import "./App.css";

export function ProductCard(props) {
  const { image, category, name, price } = props.data;

  return (
    <div class="product">
      <div class="prodct-upper">
        <img src={image} alt="" />
        <p class="product-category">{category}</p>
        <h3 class="product-name">{name}</h3>
      </div>
      <div class="price">
        <h2 class="price-label">${price}</h2> <button>Add to cart</button>
      </div>
    </div>
  );
}
