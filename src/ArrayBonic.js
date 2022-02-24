export default function ArrayBonic({ array }) {
  return (
    <div>
      {array.map((n) => (
        <span key={n}>{n},</span>
      ))}
    </div>
  );
}
