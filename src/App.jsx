import { Suspense, use, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

const ticketData = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

const ticketPromise = ticketData();

function App() {
  const tickets = use(ticketPromise);

  const [ticketStatus, setTicketStatus] = useState(tickets);
  return (
    <div className="bg-[#f5f5f5]">
      <Navbar></Navbar>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Banner
          ticketStatus={ticketStatus}
          setTicketStatus={setTicketStatus}
        ></Banner>
        <Main
          tickets={tickets}
          ticketStatus={ticketStatus}
          setTicketStatus={setTicketStatus}
        ></Main>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
