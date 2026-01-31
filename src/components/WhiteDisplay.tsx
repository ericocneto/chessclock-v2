type Props = {
  playing: "white" | "black" | null;
  setPlaying: React.Dispatch<React.SetStateAction<"white" | "black" | null>>;
  time: string;
};

export default function WhiteDisplay({ playing, setPlaying, time }: Props) {
  const isActive = playing === "white";
  const sizeClass = isActive ? "w-74 h-74" : "w-72 h-72";

  const handleClick = () => {
    setPlaying((prev) => {
      if (prev === null) return "white";
      if (prev === "white") return "black";
      return prev;
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center ${sizeClass} bg-neutral-800/40 rounded-2xl cursor-pointer`}
    >
      <span className="text-5xl font-bold text-white">{time}</span>
    </div>
  );
}
