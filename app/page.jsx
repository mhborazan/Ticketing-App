import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {}
  console.log("Failed to get tickets ", error);
};

async function Dashboard() {
  const { tickets } = await getTickets();
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories.map((uniqueCategory, index) => (
            <div key={index} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filtered_ticket, i) => (
                    <TicketCard id={i} key={i} ticket={filtered_ticket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
