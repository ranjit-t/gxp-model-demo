import React from "react";

export default function Screen1({
  isDoubleScreen,
}: {
  isDoubleScreen: boolean;
}) {
  return (
    <div
      className="flex w-full  border border-2 flex justify-center items-center"
      style={{ height: !isDoubleScreen ? "100%" : "50%" }}
    >
      Screen 1
    </div>
  );
}
