type Props = {
  turn: "white" | "black" | null;
  time: string;
  handleClick: () => void;
};

export default function WhiteDisplay({ turn, time, handleClick }: Props) {
  const isActive = turn === "white";
  const sizeClass = isActive ? "w-74 h-74" : "w-72 h-72";

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center ${sizeClass} bg-neutral-800/40 rounded-2xl cursor-pointer`}
    >
      <span className="text-5xl font-bold text-white">{time}</span>
    </div>
  );
}
