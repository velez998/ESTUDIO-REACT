export function MyAwesomeApp() {
  const firstName = "Juan";
  const lastName = "Velez";

  const favoriteGames = ["Halo", "GOW3", "Planet Zoo"];
  const active = true;

  const address = {
    postal: "76001",
    pais: "Colombia",
  };

  return (
    <>
      <h1> {firstName}</h1>
      <h3> {lastName}</h3>
      <p>{favoriteGames.join(", ")}</p>
      <h1>{active ? "esta activo" : "no esta activo"}</h1>
      <p>{JSON.stringify(address)}</p>{" "}
      {/* hay que usar JSON.stringify para mostrar objetos*/}
    </>
  );
}
