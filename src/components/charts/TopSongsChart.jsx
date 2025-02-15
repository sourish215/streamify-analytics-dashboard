import { Card, CardContent, CardHeader } from "./../ui/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types"; // Import PropTypes

const TopSongsChart = ({ data }) => {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <p>Top 5 Streamed Songs (Last 30 Days)</p>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={48} fontSize={14} />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Bar dataKey="streams" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

// Add PropTypes validation
TopSongsChart.propTypes = {
  data: PropTypes.node.isRequired,
};

export default TopSongsChart;
