import React from "react";
import Status from "./Status";

const TaskStatus = ({ tickets, ticketStatus, setTicketStatus }) => {
  console.log(ticketStatus);

  return (
    <div>
      <h1 className="py-1.5 text-xl md:text-2xl font-bold">Task Status</h1>
      {tickets.some((ticket) => ticket.status === "In-Progress") ? (
        tickets
          .filter((ticket) => ticket.status === "In-Progress")
          .map((ticket, id) => (
            <Status
              key={id}
              ticket={ticket}
              ticketStatus={ticketStatus}
              setTicketStatus={setTicketStatus}
            ></Status>
          ))
      ) : (
        <p className="text-gray-500 italic">
          Select a ticket to add to Task Status.
        </p>
      )}
    </div>
  );
};

export default TaskStatus;
