import React from "react";
import Cards from "./Cards";
import TaskStatus from "./TaskStatus";
import ResolvedTasks from "./ResolvedTasks";

const Main = ({ tickets, ticketStatus, setTicketStatus }) => {
  return (
    <div className="my-5 p-2 w-11/12 mx-auto gap-1.5 flex flex-col-reverse md:flex-row justify-center md:justify-between md:items-start">
      <div className="w-full md:w-3/4">
        <h1 className="text-xl md:text-3xl font-bold p-1">Customer Tickets</h1>
        <Cards
          tickets={tickets}
          ticketStatus={ticketStatus}
          setTicketStatus={setTicketStatus}
        ></Cards>
      </div>
      <div className="w-full md:w-1/4 text-left space-y-2">
        <TaskStatus
          tickets={tickets}
          ticketStatus={ticketStatus}
          setTicketStatus={setTicketStatus}
        ></TaskStatus>
        <ResolvedTasks tickets={tickets}></ResolvedTasks>
      </div>
    </div>
  );
};

export default Main;
