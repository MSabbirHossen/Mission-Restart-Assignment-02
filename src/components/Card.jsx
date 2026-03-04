import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";

const Card = ({ ticket, ticketStatus, setTicketStatus }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  const handleAddToTaskStatus = () => {
    toast(`Ticket #2510${id} is added to Task Status.`);

    if (ticket.status === "Open") {
      ticket.status = "In-Progress";
    }
    const newStatus = [...ticketStatus, ticket.status];
    setTicketStatus(newStatus);
  };
  return (
    <div
      onClick={() => handleAddToTaskStatus()}
      className="bg-white p-5 rounded-lg space-y-1.5 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div
          className={`rounded-3xl px-3 py-1 flex items-center gap-1 ${
            status == "Open"
              ? "bg-green-400 "
              : status == "In-Progress"
              ? " bg-yellow-300"
              : " bg-red-300 "
          }`}
        >
          <div
            className={`p-2 rounded-full font-semibold shadow mr-2 ${
              status == "Open"
                ? "bg-green-700 "
                : status == "In-Progress"
                ? " bg-yellow-600"
                : " bg-red-700 "
            }`}
          ></div>
          {status}
        </div>
      </div>
      <p className="text-gray-400">{description}</p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-8">
          <p id="id" className="text-gray-400">
            #2510{id}
          </p>
          <p
            className={`font-semibold py-1 px-2 rounded ${
              priority == "HIGH"
                ? "text-red-500"
                : priority == "MEDIUM"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {priority}
          </p>
        </div>
        <div className="flex justify-between items-center gap-6">
          <p className="text-gray-400">{customer}</p>
          <p className="text-gray-400">
            <FontAwesomeIcon className="mr-1" icon={faCalendar} />

            {createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
