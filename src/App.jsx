import { DashboardProvider } from "./context/DashboardContext";
import Header from "./components/layout/Header";
import MetricCard from "./components/cards/MetricCard";
import UserGrowthChart from "./components/charts/UserGrowthChart";
import RevenueChart from "./components/charts/RevenueChart";
import TopSongsChart from "./components/charts/TopSongsChart";
import StreamsTable from "./components/table/StreamsTable";
import { Users, PlayCircle, DollarSign, Award } from "lucide-react";
import { useContext } from "react";
import { DashboardContext } from "./context/DashboardContext";

// Main Dashboard Component
const Dashboard = () => {
  const {
    totalUsers,
    activeUsers,
    totalStreams,
    revenue,
    topArtist,
    userGrowthData,
    revenueData,
    topSongs,
  } = useContext(DashboardContext);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <Header />

      {/* Key Metrics Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <MetricCard
            title="Total Users"
            value={totalUsers.toLocaleString()}
            icon={<Users size={20} className="text-white" />}
            color="bg-blue-500"
          />
          <MetricCard
            title="Active Users"
            value={activeUsers.toLocaleString()}
            icon={<Users size={20} className="text-white" />}
            color="bg-green-500"
          />
          <MetricCard
            title="Total Streams"
            value={totalStreams.toLocaleString()}
            icon={<PlayCircle size={20} className="text-white" />}
            color="bg-purple-500"
          />
          <MetricCard
            title="Revenue"
            value={`$${revenue.toLocaleString()}`}
            icon={<DollarSign size={20} className="text-white" />}
            color="bg-yellow-500"
          />
          <MetricCard
            title="Top Artist"
            value={topArtist}
            icon={<Award size={20} className="text-white" />}
            color="bg-pink-500"
          />
        </div>
      </section>

      {/* Charts Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Data Visualization</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <UserGrowthChart data={userGrowthData} />
          <RevenueChart data={revenueData} />
          <TopSongsChart data={topSongs} />
        </div>
      </section>

      {/* Data Table Section */}
      <section>
        <StreamsTable />
      </section>
    </div>
  );
};

const App = () => {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
};

export default App;
