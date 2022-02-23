export default function MaximMinim({ valors }) {
  let suma = 0;
  let mitjana = 0;
  let maxim = 0;
  let minim = 100000000;

  for (let i = 0; i < valors.length; i++) {
    suma = suma + valors[i];
    mitjana = suma / valors.length;
    if (maxim < valors[i]) maxim = valors[i];
    if (minim > valors[i]) minim = valors[i];
  }

  return (
    <div>
      <h1>Suma, mitjana, major i menor</h1>
      <div>
        Suma:{suma}
        <br />
        Mitjana:{mitjana}
        <br />
        Major:{maxim}
        <br />
        Menor:{minim}
      </div>
    </div>
  );
}
