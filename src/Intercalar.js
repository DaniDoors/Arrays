export default function intercalar({ array1, array2 }) {
  let arrayConcatenat = [];
  for (let i = 0; i < array1.length || i < array2.length; i++) {
    arrayConcatenat.push(array1[i]);
    arrayConcatenat.push(array2[i]);
  }

  return (
    <div>
      <h1> Array concatenat</h1>
      <div>
        arrays original 1:
        <br />
        array original 2:
        <br />
        array concatenat: {arrayConcatenat}
      </div>
    </div>
  );
}
