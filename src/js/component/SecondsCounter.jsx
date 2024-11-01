import React from "react";

const SecondsCounter = ({ seconds }) => {
  return (
    <div className="Container-fluid fa-lg">
      <div className="row bg-dark text-white p-5 mx-auto">
        <div className="col">
          <i className="fa-regular fa-clock"></i>
        </div>
        <div className="col">{Math.floor(seconds / 600) % 10}</div>
        <div className="col">{Math.floor(seconds / 60) % 10}</div>
        <div className="col">{Math.floor(seconds / 600) % 10}</div>
        <div className="col"> {Math.floor(seconds / 10 ) %10}</div>
        <div className="col">{Math.floor(seconds /  1) % 10}</div>
        <div className="col">{Math.floor(seconds /  1 ) % 10}</div>
      </div>
    </div>
  );
};
export default SecondsCounter;