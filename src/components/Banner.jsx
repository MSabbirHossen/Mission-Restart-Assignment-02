import React from "react";
// import bgImg from "../assets/vector1.png";
// import bgImg2 from "../assets/vector2.png";

const Banner = ({ ticketStatus }) => {
  const inProgressCount = ticketStatus.filter(
    (ticket) => ticket.status === "In-Progress",
  ).length;

  const resolvedCount = ticketStatus.filter(
    (ticket) => ticket.status === "Resolved",
  ).length;

  const bannerData = [
    {
      title: "In-progress",
      count: inProgressCount,
      gradient: "from-[#6530E4] via-[#7840E8] to-[#8B50ED]",
    },
    {
      title: "Resolved",
      count: resolvedCount,
      gradient: "from-[#54CF68] via-[#2FAD70] to-[#00827A]",
    },
  ];

  return (
    <div className="w-11/12 p-2 mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-10  text-white text-xl font-bold my-5">
      {bannerData.map((item, index) => (
        <div
          key={index}
          className={`w-full md:w-1/2 h-[15vh] md:h-[30vh] rounded-lg flex items-center justify-center bg-gradient-to-r ${item.gradient} bg-cover bg-center`}
        >
          <h5 className="text-center">
            {item.title} <br />
            <span className="md:text-6xl"> {item.count} </span>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Banner;
