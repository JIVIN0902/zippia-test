import React from "react";
import ToolButton from "./ToolButton";

const Toolbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-start items-center p-2 overflow-hidden">
        <ToolButton name="Developer" />
        <ToolButton name="City" />
        <ToolButton hide={true} name="Date Posted" />
        <ToolButton hide={true} name="Job Type" />
        <ToolButton hide={true} name="Job Level" />
        <ToolButton hide={true} name="Salary" />
      </div>
    </div>
  );
};

export default Toolbar;
