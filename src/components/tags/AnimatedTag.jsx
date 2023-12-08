import { HiCheck } from "react-icons/hi";

const AnimatedTag = ({ children }) => {
  return (
    <div className="border px-3 py-1 rounded-md text-sm flex items-center justify-start gap-[5px]">
      <HiCheck className="font-thin text-gray-700" />
      <div className="text-black">{children}</div>
    </div>
  );
};

export default AnimatedTag;
