import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100px] w-screen">
      <div className="lds-roller">
        {[...Array(8)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
      <div>Loading...</div>
    </div>
  );
};

export default Loader;
