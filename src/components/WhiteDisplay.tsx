type Props = {
  playing: "white" | "black";
  setPlaying: React.Dispatch<React.SetStateAction<"white" | "black">>;
};
export default function WhiteDisplay({ playing, setPlaying }: Props) {
  return (
    <div
      onClick={() => setPlaying(playing === "white" ? "black" : "white")}
      className="flex flex-col items-center justify-center w-72 h-72 bg-neutral-800/40 rounded-2xl cursor-pointer"
    >
      <span className="text-5xl  font-bold text-white">00:00</span>
    </div>
  );
  console.log(playing);
}
