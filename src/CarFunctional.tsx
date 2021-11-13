import { useEffect, useState } from "react";

type Props = {
  alergy: string;
};

const CarFunctional = ({ alergy }: Props) => {
  const [character, setCharacter] = useState<{
    weapon: string;
    life: number;
  }>({ life: 100, weapon: "katana" });

  const [totalEnemies, setTotalEnemies] = useState(0);

  useEffect(() => {
    // HTTP that saves data for character
    setCharacter({ weapon: "katana", life: 80 });
    alert("HELLO");
  }, []);

  return (
    <div>
      <h1>I am functional and I am alergic to {alergy}</h1>
      <h1 onClick={() => setTotalEnemies((prev) => prev + 1)}>
        I have {character.life} life and a {character.weapon}
      </h1>
      <h1>TOTAL: {totalEnemies}</h1>
    </div>
  );
};

export default CarFunctional;
