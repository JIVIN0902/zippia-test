import React from "react";

// Open and setOpen functions to toggle the responsive navbar
interface Props {
  open: boolean;
}

const MobileNav: React.FC<Props> = ({ open }) => {
  return (
    //   Responsive based on button click
    <div
      className={`${
        open ? "flex absolute translate-y-0 flex-col" : "-translate-y-full"
      } bg-nav-dark lg:hidden text-white transition-all duration-300 absolute w-screen`}
    >
      {/* Styling similar to the zippia site */}
      <h3 className="mobile-nav-menu">My Jobs</h3>
      <h3 className="mobile-nav-menu">Career Research</h3>
      <h3 className="mobile-nav-menu">About Us</h3>
      <button className="bg-btn-blue m-2 rounded-sm py-1 focus:outline-none">
        LOG IN
      </button>
      <button className="bg-gray-500 m-2 rounded-sm py-1 focus:outline-none">
        SIGN UP
      </button>
    </div>
  );
};

export default MobileNav;
