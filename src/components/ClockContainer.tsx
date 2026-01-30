import BlackDisplay from "./BlackDisplay";
import WhiteDisplay from "./WhiteDisplay";

export default function ClockContainer() {
  return (
    <div className="flex flex-col gap-8">
      <WhiteDisplay />
      <BlackDisplay />
    </div>
  );
}
