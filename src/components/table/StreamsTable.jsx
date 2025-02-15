import { useState, useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";

const StreamsTable = () => {
  const { recentStreams, setFilter, filter } = useContext(DashboardContext);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  // Function to handle sorting
  const sortColumn = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Apply sorting and filtering
  const getSortedRows = () => {
    let sortableItems = [...recentStreams];

    // Apply filter if any
    if (filter.term) {
      sortableItems = sortableItems.filter(
        (item) =>
          item.songName.toLowerCase().includes(filter.term.toLowerCase()) ||
          item.artist.toLowerCase().includes(filter.term.toLowerCase())
      );
    }

    // Apply sorting
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  };

  // Handle filtering
  const handleFilterChange = (e) => {
    setFilter({ term: e.target.value });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex flex-col items-start md:flex-row md:items-center justify-between  mb-4">
        <h2 className="text-xl font-bold">Recent Streams</h2>
        <input
          type="text"
          placeholder="Filter by song or artist..."
          className="px-3 py-2 border rounded-md"
          onChange={handleFilterChange}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th
                className="py-2 px-4 border-b text-left cursor-pointer"
                onClick={() => sortColumn("songName")}
              >
                Song Name{" "}
                {sortConfig.key === "songName" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th
                className="py-2 px-4 border-b text-left cursor-pointer"
                onClick={() => sortColumn("artist")}
              >
                Artist{" "}
                {sortConfig.key === "artist" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th
                className="py-2 px-4 border-b text-left cursor-pointer"
                onClick={() => sortColumn("dateStreamed")}
              >
                Date Streamed{" "}
                {sortConfig.key === "dateStreamed" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th
                className="py-2 px-4 border-b text-left cursor-pointer"
                onClick={() => sortColumn("streamCount")}
              >
                Stream Count{" "}
                {sortConfig.key === "streamCount" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th className="py-2 px-4 border-b text-left">User ID</th>
            </tr>
          </thead>
          <tbody>
            {getSortedRows().map((streamRowData, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-2 px-4 border-b">{streamRowData.songName}</td>
                <td className="py-2 px-4 border-b">{streamRowData.artist}</td>
                <td className="py-2 px-4 border-b">
                  {streamRowData.dateStreamed}
                </td>
                <td className="py-2 px-4 border-b">
                  {streamRowData.streamCount.toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b">{streamRowData.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StreamsTable;
