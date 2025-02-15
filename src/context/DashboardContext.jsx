import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import mockData from "../data/mockData";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [filter, setFilter] = useState({ term: "" });

  return (
    <DashboardContext.Provider value={{ ...mockData, filter, setFilter }}>
      {children}
    </DashboardContext.Provider>
  );
};

// Add PropTypes validation
DashboardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
