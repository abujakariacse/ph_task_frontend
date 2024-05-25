import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ children, url }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(url)}
      className="bg-red-400 px-3 py-2 rounded font-medium mr-3 hover:bg-green-500 transition-all duration-300 ease-linear"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};
export default Button;
