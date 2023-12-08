// eslint-disable-next-line react/prop-types
const ButtonFilled = ({ children, width }) => {
  console.log(width);
  return (
    <button
      style={{ width: width || "unset" }}
      className={`px-2 py-1 bg-gradient-to-br from-violet-600 via-violet-900 to-violet-600 text-white font-medium border border-violet-600 rounded-lg hover:from-blue-900 hover:via-violet-900 hover:to-violet-950 cursor-pointer text-center transition-colors`}
    >
      {children}
    </button>
  );
};

export default ButtonFilled;
