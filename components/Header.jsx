import React from "react";

const Header = ({ title }) => {
  return (
    <div className="flex justify-between px-4 pt-4 text-white">
      <h2>{title}</h2>
      <h2>Welcome Back, Nuel</h2>
    </div>
  );
};

export default Header;
