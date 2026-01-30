import { Settings, Play } from "lucide-react";
import { useState } from "react";
export default function Navbar() {
  const [start, setStart] = useState(false);
  return (
    <div className="h-20 w-150 flex justify-center items-center rounded-full bg-white/4">
      <nav className="flex flex-row flex-nowrap gap-8">
        {" "}
        <Play className="text-white size-12 cursor-pointer hover:text-neutral-300 transition ease-in-out" />
        <Settings className="text-white size-12 cursor-pointer hover:text-neutral-300 transition ease-in-out" />
      </nav>
    </div>
  );
}
