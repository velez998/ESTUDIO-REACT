import ItemCounter from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo", quantity: 1 },
  { productName: "Play", quantity: 2 },
  { productName: "Xbox", quantity: 5 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito compras</h1>

      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
    </>
  );
}

/* <ItemCounter name="Nintendo" quantity={1} />
      <ItemCounter name="Play" quantity={2} />
      <ItemCounter name="Xbox" quantity={3} /> */
