import { Card, CardContent, CardHeader } from "./../ui/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types"; // Import PropTypes

const UserGrowthChart = ({ data }) => {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <p>User Growth (Past 12 Months)</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="totalUsers"
                stroke="#8884d8"
                name="Total Users"
              />
              <Line
                type="monotone"
                dataKey="activeUsers"
                stroke="#82ca9d"
                name="Active Users"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

// Add PropTypes validation
UserGrowthChart.propTypes = {
  data: PropTypes.node.isRequired,
};

export default UserGrowthChart;
