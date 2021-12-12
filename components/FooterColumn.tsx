import React from "react";

interface Props {
  titles: string[];
  heading: string;
}

const FooterColumn: React.FC<Props> = ({ titles, heading }) => {
  return (
    <div className="mx-5">
      <h4 className="font-bold mt-16 mb-5 text-sm text-center md:text-left">
        {heading}
      </h4>
      <ul className="flex flex-col justify-center items-center md:items-start">
        {titles.map((title, index) => (
          <li className="text-xs cursor-pointer text-gray-400 py-1" key={index}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
