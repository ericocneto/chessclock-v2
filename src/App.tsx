import ClockContainer from "./components/ClockContainer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex gap-12 flex-col justify-center items-center w-scren h-screen bg-zinc-950">
      <ClockContainer />
      <Navbar />
    </div>
  );
}
