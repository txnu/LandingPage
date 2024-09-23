import Hero from "../components/Heros/hero";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center mt-10 mb-20 sm:px-10">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
