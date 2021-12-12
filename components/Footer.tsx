import Image from "next/image";
import React from "react";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <div className="bg-nav-dark text-white flex md:flex-row flex-col px-10 pb-16 justify-around md:items-start items-center">
      <div className="mt-16 mx-5 flex flex-col items-center md:items-start">
        <Image
          width={140}
          height={50}
          src="https://static.zippia.com/ui-router/images/header/logo_white.svg"
          alt="zippia logo"
        />
        <p>
          <span className="text-gray-400 text-sm">Email: </span>{" "}
          <strong>support@zippia.com</strong>{" "}
        </p>
        <p className="text-gray-400 text-sm">Copyright © 2020 Zippia</p>
      </div>
      <FooterColumn
        titles={[
          "About Us",
          "Employer Services",
          "Terms of Use",
          "Privacy Policy",
          "Contact Us",
        ]}
        heading="Zippia"
      />
      <FooterColumn
        heading="CAREER & JOBS"
        titles={[
          "Career By Choice",
          "Career By Categories",
          "Jobs By Location",
          "College Grad Careers",
        ]}
      />
      <FooterColumn
        heading="JOB CATEGORIES"
        titles={[
          "Architecture and Engineering",
          "Arts, Entertainment, Sports, and Media",
          "Building and Grounds Maintenance",
          "Business and Financial",
          "Community and Social Services",
          "Computer and Mathematical",
        ]}
      />
      <FooterColumn
        heading="BEST COMPANIES IN"
        titles={["Alabama", "Alaska", "Arizona", "Arkansas", "California"]}
      />
    </div>
  );
};

export default Footer;
