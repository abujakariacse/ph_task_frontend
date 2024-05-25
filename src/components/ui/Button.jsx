import { useNavigate } from "react-router-dom";

const Button = ({ children, url }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(url)}
      className="bg-red-400 px-3 py-2 rounded font-medium mr-3 hover:bg-green-500 transition-all duration-300 ease-linear text-sm"
    >
      {children}
    </button>
  );
};
