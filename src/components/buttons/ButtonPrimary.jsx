const ButtonEmpty = ({ children, width }) => {
  return (
    <div
      className={`px-2 py-1 ${
        width ? `w-[${width}]` : "w-full"
      } bg-gradient-to-br rounded-lg text-gray-600 bg-gray-100 font-medium border cursor-pointer text-center`}
    >
      {children}
    </div>
  );
};

export default ButtonEmpty;
