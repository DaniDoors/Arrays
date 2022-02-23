import Afegir from "./Afegir";
import "./App.css";
import Intercalar from "./Intercalar";
import MaximMinim from "./MaximMinim";
import Objectes from "./Objectes";
import TreureNoRepetits from "./TreureNoRepetits";
import TreureRepetits from "./TreureRepetits";

const valors = [4, 7, 5, 8, 3, 6, 5, 12, 8, 54, 100, 5, 7, 9];
const valors2 = [5, 3, 8, 2, 98, 4, 3, 5, 6, 9];
const ides = ["a", "b", "c", "d"];
const objecte = {
  a: { hola: "un" },
  b: { hola: "dos" },
  c: { hola: "tres" },
  d: { hola: "quatre" },
};
let numeroMes = 99;
let posicio = 7;

export default function App() {
  return (
    <div>
      <MaximMinim valors={valors} />
      <br />
      <Afegir array={valors} numero={numeroMes} posicio={posicio} />
      <br />
      <TreureRepetits array={valors} />
      <br />
      <TreureNoRepetits array={valors} />
      <br />
      <Intercalar array1={valors} array2={valors2} />
      <br />
      <Objectes array={ides} objecte={objecte} />
    </div>
  );
}
