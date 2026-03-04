import React from "react";

const ResolvedTasks = ({ tickets }) => {
  return (
    <div>
      <h1 className="py-1.5 text-xl md:text-2xl font-bold">Resolved Task</h1>

      {tickets.some((ticket) => ticket.status === "Resolved") ? (
        tickets
          .filter((ticket) => ticket.status === "Resolved")
          .map((ticket) => (
            <p
              key={ticket.id}
              className="p-3 m-3 bg-[#e0e7ff] rounded-lg text-lg font-semibold"
            >
              {ticket.title}.
            </p>
          ))
      ) : (
        <p className="text-gray-500 italic">No resolved tasks yet.</p>
      )}
    </div>
  );
};
export default ResolvedTasks;
