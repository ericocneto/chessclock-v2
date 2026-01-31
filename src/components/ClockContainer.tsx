import BlackDisplay from "./BlackDisplay";
import WhiteDisplay from "./WhiteDisplay";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function ClockContainer() {
  const [whiteSeconds, setWhiteSeconds] = useState<number>(300);
  const [blackSeconds, setBlackSeconds] = useState<number>(300);
  const [playing, setPlaying] = useState<"white" | "black" | null>(null);

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
  }, [playing]);

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (totalSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  const handleSwitchTurn = () => {
    if (!playing) return;
    setPlaying((prev) => (prev === "white" ? "black" : "white"));
  };

  const handleClick = () => {
    if (playing === null) {
      setPlaying("white");
    }
  };
  return (
    <>
      <Navbar handleClick={handleClick} />

      <div className="flex gap-8">
        <WhiteDisplay
          playing={playing}
          time={formatTime(whiteSeconds)}
          handleClick={handleSwitchTurn}
        />

        <BlackDisplay
          playing={playing}
          time={formatTime(blackSeconds)}
          handleClick={handleSwitchTurn}
        />
      </div>
    </>
  );
}
