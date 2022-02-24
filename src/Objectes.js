export default function objectes({ array, objecte }) {
  let abcd = 0;
  let resultat = [];
  for (let i = 0; i < array.length; i++) {
    abcd = array[i];
    resultat.push(objecte[abcd]);
  }
  return (
    <div>
      <h1>Objectes</h1>
      <div>
        array original:{array}
        <br />
        objete original:{abcd}
        <br />
        resultat:{resultat[0].hola},{resultat[1].hola},{resultat[2].hola},
        {resultat[3].hola}
      </div>
    </div>
  );
}
