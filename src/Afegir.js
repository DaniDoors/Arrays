export default function Afegir({ array, numero, posicio }) {
  let copia = [...array];

  copia.splice(posicio, 0, numero);

  return (
    <div>
      <h1>Afegir</h1>
      <div>
        array original:{array}
        <br />
        numero afegit: {numero}
        <br />
        posicio:{posicio}
        <br />
        array resultat:{copia}
      </div>
    </div>
  );
}
