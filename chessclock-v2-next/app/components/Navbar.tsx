"use client";

import { Settings, Play, Pause } from "lucide-react";

type Props = {
  handleClick: () => void;
  isPaused: boolean;
  turn: "white" | "black" | null;
};

export default function Navbar({ handleClick, isPaused, turn }: Props) {
  return (
    <div className="h-20 w-150 flex justify-center items-center rounded-full bg-white/4">
      <nav className="flex gap-8">
        {isPaused || turn === null ? (
          <Play
            className="text-neutral-300 size-12 cursor-pointer hover:text-white"
            onClick={handleClick}
          />
        ) : (
          <Pause
            className="text-neutral-300 size-12 cursor-pointer hover:text-white"
            onClick={handleClick}
          />
        )}
        <Settings className="text-neutral-300 size-12 cursor-pointer hover:text-white" />
      </nav>
    </div>
  );
}
