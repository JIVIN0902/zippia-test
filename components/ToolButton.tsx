import React from "react";

interface Props {
  name: string;
  hide?: boolean;
}

const ToolButton: React.FC<Props> = ({ name, hide }) => {
  return (
    <button
      className={`bg-btn-blue mx-3 ${
        hide ? "hidden" : ""
      } border-btn-blue lg:flex rounded-sm py-1 px-2 flex justify-between items-center text-white font-bold text-sm`}
    >
      {name}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 ml-2 font-bold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
};

export default ToolButton;
