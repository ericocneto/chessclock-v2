import BlackDisplay from "./BlackDisplay";
import WhiteDisplay from "./WhiteDisplay";
import { useEffect, useState } from "react";

export default function ClockContainer() {
  const [playing, setPlaying] = useState<"white" | "black">("white");
  return (
    <div className="gap-8 flex flex-col">
      <WhiteDisplay playing={playing} setPlaying={setPlaying} />
      <BlackDisplay playing={playing} setPlaying={setPlaying} />
    </div>
  );
}
