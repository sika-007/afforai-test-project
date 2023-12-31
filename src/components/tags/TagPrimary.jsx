const TagPrimary = ({ children, className }) => {
  return (
    <div
      className={`${className} border-2 px-3 py-1 rounded-md text-sm text-purple-600 border-purple-600`}
    >
      {children}
    </div>
  );
};

export default TagPrimary;
