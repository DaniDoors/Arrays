import ArrayBonic from "./ArrayBonic";

export default function TreureNoRepetits({ array }) {
  let copia = [...array];
  let noRepetits = [];

  for (let i = 0; i < copia.length; i++) {
    for (let f = i + 1; f < copia.length; f++) {
      if (copia[i] === copia[f]) {
        noRepetits.push(copia[i]);
      }
    }
  }
  return (
    <div>
      <h1>Treure No Repetits</h1>
      <div>
        array original:
        <ArrayBonic array={array} />
        <br />
        array final:
        <ArrayBonic array={noRepetits} />
      </div>
    </div>
  );
}
