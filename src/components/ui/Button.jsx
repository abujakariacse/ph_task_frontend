const Button = ({ children }) => {
  return (
    <button className="bg-red-400 px-3 py-2 rounded font-medium mr-3 hover:bg-green-500 transition-all duration-300 ease-linear">
      {children}
    </button>
  );
};

export default Button;
