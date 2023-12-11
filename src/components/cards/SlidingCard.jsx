import { TagOrange } from "../tags";

const SlidingCards = ({ className, text, author }) => {
  return (
    <div className="px-2">
      <div
        className={`${className} shrink-0 border rounded-lg w-[600px] h-[220px] p-5 flex flex-col items-center gap-3`}
      >
        <div className="h-[150px]">
          {" "}
          {/* Height should be definite */}
          <p className="section-text">{text}</p>
        </div>
        <div className="border h-0 w-[90%]" />
        <div className="flex w-full justify-between px-2 gap-5">
          <div className="flex items-center gap-2">
            {/* <img src="" alt="" />             Real thing... Placeholder below*/}
            <div className="w-6 h-6 rounded-full bg-green-600" />
            <p className="card-text">{author}</p>
          </div>
          <div>
            <TagOrange />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingCards;
