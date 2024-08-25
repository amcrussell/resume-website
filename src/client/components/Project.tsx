import React from "react";

interface projectProps {
  name: string;
  body: string;
}

export default function Project({ name, body }: projectProps) {
  return (
    <div className="card-here m-2 min-h-64 w-[20rem] rounded-lg border border-slate-100 px-6 shadow">
      <h4 className="mb-2 text-2xl font-bold tracking-tight ">{name}</h4>
      <p className="">
        {body}inline-flex items-center rounded-lg bg-blue-700 px-3 py-2
        text-center text-sm font-mediuminline-flex items-center rounded-lg
        bg-blue-700 px-3 py-2 text-center text-sm font-medium inline-flex
      </p>
      <a
        href="#"
        className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
      <a href="https://ibb.co/JHYj8MJ">
        <img
          src="https://i.ibb.co/jDCkq1X/imageblgosite-tmep.png"
          alt="imageblgosite-tmep"
        />
      </a>
    </div>
  );
}
