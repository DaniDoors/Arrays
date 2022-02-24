import ArrayBonic from "./ArrayBonic";

export default function TreureRepetits({ array }) {
  let copia = [...array];

  for (let i = 0; i < copia.length; i++) {
    for (let f = i + 1; f < copia.length; f++) {
      if (copia[i] === copia[f]) {
        console.log("iguals");
        copia.splice(f, 1);
      }
    }
  }

  return (
    <div>
      <h1>Treure Repetits</h1>
      <div>
        array original:
        <ArrayBonic array={array} />
        <br />
        array final:
        <ArrayBonic array={copia} />
      </div>
    </div>
  );
}
