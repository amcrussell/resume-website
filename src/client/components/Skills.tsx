import React from "react";

interface skillsProps {
  name: string;
}

export default function Skills({ name }: skillsProps) {
  return (
    <>
      <li className="m-1 w-24 rounded-lg bg-cyan-500 p-2 hover:bg-cyan-700 ">
        {name}
      </li>
    </>
  );
}
