import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "🍎",
      soldout: true,
    },
    {
      name: "Mango",
      price: 9,
      emoji: "🥭",
      soldout: true,
    },
    {
      name: "Banana",
      price: 8,
      emoji: "🍌",
      soldout: false,
    },
    {
      name: "Orange",
      price: 7,
      emoji: "🍊",
      soldout: false,
    },
    {
      name: "Pineapple",
      price: 6,
      emoji: "🍍",
      soldout: false,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
