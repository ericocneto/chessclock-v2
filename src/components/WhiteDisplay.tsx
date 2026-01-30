type Props = {
  playing: "white" | "black" | null;
  setPlaying: React.Dispatch<React.SetStateAction<"white" | "black" | null>>;
  time: string;
};

export default function WhiteDisplay({ playing, setPlaying, time }: Props) {
  const isActive = playing === "white";
  const sizeClass = isActive ? "w-80 h-80" : "w-72 h-72";

  const handleClick = () => {
    if (isActive) {
      setPlaying("black");
    }
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
