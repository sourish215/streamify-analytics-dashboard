import { Card, CardContent, CardHeader } from "./../ui/Card";
import PropTypes from "prop-types"; // Import PropTypes

const MetricCard = ({ title, value, icon, color }) => {
  return (
    <Card className="flex-1 min-w-64">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <p className="text-sm font-medium">{title}</p>
        <div className={`p-2 rounded-full ${color}`}>{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

// Add PropTypes validation
MetricCard.propTypes = {
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired,
};

export default MetricCard;
