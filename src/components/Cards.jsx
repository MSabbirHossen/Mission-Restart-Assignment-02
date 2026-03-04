import Card from "./Card";

const Cards = ({ tickets, ticketStatus, setTicketStatus }) => {
  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4 space-x-2">
      {tickets.map((ticket) =>
        ticket.status === "Resolved" ? null : (
          <Card
            key={ticket.id}
            ticket={ticket}
            ticketStatus={ticketStatus}
            setTicketStatus={setTicketStatus}
          />
        ),
      )}
    </div>
  );
};

export default Cards;
