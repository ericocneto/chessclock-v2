import BlackDisplay from "./BlackDisplay";
import WhiteDisplay from "./WhiteDisplay";
import { useEffect, useState } from "react";

export default function ClockContainer() {
  const [whiteSeconds, setWhiteSeconds] = useState<number>(60);
  const [blackSeconds, setBlackSeconds] = useState<number>(60);
  const [playing, setPlaying] = useState<"white" | "black" | null>("white");

  useEffect(() => {
    let timer: number | null = null;

    if (playing === "white" && whiteSeconds > 0) {
      timer = setInterval(() => {
        setWhiteSeconds((prev) => prev - 1);
      }, 1000);
    } else if (playing === "black" && blackSeconds > 0) {
      timer = setInterval(() => {
        setBlackSeconds((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [playing, whiteSeconds, blackSeconds]); // Dependências para reagir a mudanças

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (totalSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  // Função para alternar turnos (pode ser chamada pelos displays)
  const switchTurn = () => {
    setPlaying((prev) => (prev === "white" ? "black" : "white"));
  };

  return (
    <div className="flex gap-8">
      <WhiteDisplay
        playing={playing}
        setPlaying={setPlaying}
        time={formatTime(whiteSeconds)}
        onSwitch={switchTurn}
      />
      <BlackDisplay
        playing={playing}
        setPlaying={setPlaying}
        time={formatTime(blackSeconds)}
        onSwitch={switchTurn}
      />
    </div>
  );
}
