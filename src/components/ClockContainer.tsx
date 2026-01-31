import BlackDisplay from "./BlackDisplay";
import WhiteDisplay from "./WhiteDisplay";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function ClockContainer() {
  const [whiteSeconds, setWhiteSeconds] = useState<number>(300);
  const [blackSeconds, setBlackSeconds] = useState<number>(300);
  const [turn, setTurn] = useState<"white" | "black" | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(true);

  useEffect(() => {
    let timer: number | null = null;

    if (!isPaused && turn === "white" && whiteSeconds > 0) {
      timer = setInterval(() => {
        setWhiteSeconds((prev) => prev - 1);
      }, 1000);
    } else if (!isPaused && turn === "black" && blackSeconds > 0) {
      timer = setInterval(() => {
        setBlackSeconds((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [turn, isPaused]);

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (totalSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  const handleSwitchTurn = () => {
    if (isPaused) return;
    setTurn((prev) => (prev === "white" ? "black" : "white"));
  };

  const handleClick = () => {
    if (turn === null) {
      setTurn("white");
      setIsPaused(false);
      return;
    }
    setIsPaused((prev) => !prev);
  };
  return (
    <>
      <div className="flex gap-8">
        <WhiteDisplay
          turn={turn}
          time={formatTime(whiteSeconds)}
          handleClick={handleSwitchTurn}
        />

        <BlackDisplay
          turn={turn}
          time={formatTime(blackSeconds)}
          handleClick={handleSwitchTurn}
        />
      </div>
      <Navbar handleClick={handleClick} isPaused={isPaused} turn={turn} />
    </>
  );
}
