export default function Fruit({ name, price, emoji, soldout }) {
  return (
    <>
      {price > 1 ? (
        <li>
          {emoji} {name} {price} {soldout ? "soldOut" : ""}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
