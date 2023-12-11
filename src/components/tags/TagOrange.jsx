const TagOrange = ({ children, className }) => {
  return (
    <div
      className={`${className} text-orange-600 text-sm rounded-lg flex py-1 px-2 items-center gap-2 border-2 border-orange-600 bg-orange-600 bg-opacity-20 h-fit w-fit`}
    >
      <p>P</p>
      <p className="">View on Product hunt</p>
    </div>
  );
};

export default TagOrange;
