import React from "react";

const Skillname = (props) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={props.name} alt="Html icon" />
      <p className="my-4">{props.title}</p>
    </div>
  );
};

export default Skillname;
