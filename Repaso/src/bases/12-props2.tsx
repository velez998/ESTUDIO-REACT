import ItemsCounter from "./11-props";

interface PropiedadesP {
  name: string;
  quantity: number;
}

const valoresProps: PropiedadesP[] = [
  { name: "Nintendo", quantity: 1 },
  { name: "Play", quantity: 1 },
  { name: "Xbox", quantity: 1 },
];

export function Propiedades() {
  return (
    <div>
      <h1>Carrito</h1>
      {valoresProps.map(({ name, quantity }) => (
        <ItemsCounter name={name} quantity={quantity} />
      ))}
    </div>
  );
}

{
  /* Importante:
    los componentes deben empezar si o si por mayusculas
    los componentes siempre deben ir seguido del return (), no terminar return;
    */
}
