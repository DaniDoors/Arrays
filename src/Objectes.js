export default function objectes({ array, objecte }) {
  let resultat = [1, 2];
  for (let i = 0; i < array.length; i++) {
    let abcd = array[i];
    resultat.push(objecte.a);
  }
  return (
    <div>
      <h1>Objectes</h1>
      <div>
        array original:{array}
        <br />
        objete original:
        <br />
        resultat:{resultat[2].hola}
      </div>
    </div>
  );
}
