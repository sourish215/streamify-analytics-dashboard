import PropTypes from "prop-types";

const Card = ({
  children,
  className = "",
  variant = "default",
  padding = "medium",
  onClick,
}) => {
  const baseStyles = "rounded-lg bg-white";

  const variantStyles = {
    default: "border border-gray-200",
    bordered: "border-2 border-gray-300",
    elevated: "shadow-lg",
  };

  const paddingStyles = {
    none: "p-0",
    small: "p-3",
    medium: "p-4",
    large: "p-6",
  };

  return (
    <div
      className={`
        ${baseStyles} 
        ${variantStyles[variant]} 
        ${paddingStyles[padding]} 
        ${className}
        ${onClick ? "cursor-pointer hover:shadow-md transition-shadow" : ""}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = "" }) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

const CardFooter = ({ children, className = "" }) => {
  return <div className={`mt-4 ${className}`}>{children}</div>;
};

const CardContent = ({ children, className = "" }) => {
  return <div className={`mt-4 ${className}`}>{children}</div>;
};

// PropTypes validation
Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "bordered", "elevated"]),
  padding: PropTypes.oneOf(["none", "small", "medium", "large"]),
  onClick: PropTypes.func,
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Default props
Card.defaultProps = {
  className: "",
  variant: "default",
  padding: "medium",
};

CardHeader.defaultProps = {
  className: "",
};

CardFooter.defaultProps = {
  className: "",
};

CardContent.defaultProps = {
  className: "",
};

export { Card, CardHeader, CardFooter, CardContent };
