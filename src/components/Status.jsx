import React from "react";
import { toast } from "react-toastify";

const Status = ({ ticket, ticketStatus, setTicketStatus }) => {
  const handleCompleteBtn = (title) => {
    toast(`${title} resolved.`);

    if (ticket.status === "In-Progress") {
      ticket.status = "Resolved";
    }
    const newStatus = [...ticketStatus, ticket.status];
    setTicketStatus(newStatus);
  };

  const { title } = ticket;

  return (
    <>
      <div className="p-2">
        <div className="w-full p-4 rounded-lg space-y-4 bg-white mb-1">
          <h1 className="text-lg font-semibold">{title}</h1>
          <button
            onClick={() => handleCompleteBtn(title)}
            className="btn w-full mx-auto rounded-lg bg-green-600 text-white"
          >
            Complete
          </button>
        </div>
      </div>
    </>
  );
};

export default Status;
