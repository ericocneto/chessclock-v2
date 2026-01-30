import BlackDisplay from "./BlackDisplay";
import WhiteDisplay from "./WhiteDisplay";
import { useEffect, useState } from "react";

export default function ClockContainer() {
  const [playing, setPlaying] = useState<"white" | "black">("white");
  useEffect(() => {
    if (playing === "white") {
      console.log("tempo do branco");
    } else {
      console.log("tempo do preto");
    }
  }, [playing]);
  return (
    <div className="flex gap-8">
      <WhiteDisplay playing={playing} setPlaying={setPlaying} />
      <BlackDisplay playing={playing} setPlaying={setPlaying} />
    </div>
  );
}
