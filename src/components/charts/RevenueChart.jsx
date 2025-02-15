import { Card, CardContent, CardHeader } from "./../ui/Card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types"; // Import PropTypes

const RevenueChart = ({ data }) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <p>Revenue Distribution</p>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                fontSize={14}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

// Add PropTypes validation
RevenueChart.propTypes = {
  data: PropTypes.node.isRequired,
};

export default RevenueChart;
