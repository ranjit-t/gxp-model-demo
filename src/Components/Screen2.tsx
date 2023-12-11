import React from "react";

export default function Screen2({
  isDoubleScreen,
}: {
  isDoubleScreen: boolean;
}) {
  return isDoubleScreen ? (
    <div
      className="flex h-full w-full border border-2 flex justify-center items-center"
      style={{ height: "50%" }}
    >
      Screen 2
    </div>
  ) : null;
}
