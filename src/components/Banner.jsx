import React from "react";

const Banner = ({ ticketStatus }) => {
  const inProgressCount = ticketStatus.filter(
    (ticket) => ticket.status === "In-Progress"
  ).length;

  const resolvedCount = ticketStatus.filter(
    (ticket) => ticket.status === "Resolved"
  ).length;

  return (
    <div className="w-11/12 p-2 mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-10  text-white text-xl font-bold my-5">
      <div className="w-full md:w-1/2 h-[15vh] md:h-[30vh] rounded-lg flex items-center justify-center bg-gradient-to-r from-[#6530E4] via-[#7840E8] to-[#8B50ED]">
        <h5 className="text-center">
          In-progress <br />
          <span className="md:text-6xl"> {inProgressCount} </span>
        </h5>
      </div>
      <div className="w-full md:w-1/2 h-[15vh] md:h-[30vh] rounded-lg flex items-center justify-center bg-gradient-to-r from-[#54CF68] via-[#2FAD70] to-[#00827A]">
        <h5 className="text-center ">
          Resolved <br />
          <span className="md:text-6xl"> {resolvedCount}</span>
        </h5>
      </div>
    </div>
  );
};

export default Banner;
