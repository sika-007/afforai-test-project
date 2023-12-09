import { FaCheckCircle } from "react-icons/fa";
import ladyImg from "../../assets/images/image-01.png";

const SayGoodbye = () => {
  return (
    <div className="flex flex-col items-center md:flex-row section-padding gap-10 lg:gap-20">
      <div className="flex flex-1 flex-col items-start gap-4">
        <h2 className="section-heading">
          Say goodbye to long, tiresome documents
        </h2>
        <p className="section-text">
          Afforai seamlessly translates documents, files, spreadsheets &
          websites, filtering out what you don’t need & answering your specific
          questions within seconds.
        </p>
        <ul className="flex flex-col gap-3">
          <li className="text-green-500 flex gap-3">
            <FaCheckCircle className="w-5 h-5" />
            <p>A whip smart research assistant</p>
          </li>
          <li className="text-green-500 flex gap-3">
            <FaCheckCircle className="w-5 h-5" />
            <p>We speak every language</p>
          </li>
          <li className="text-green-500 flex gap-3">
            <FaCheckCircle className="w-5 h-5" />
            <p>Reliable data citation for answers</p>
          </li>
          <li className="text-green-500 flex gap-3">
            <FaCheckCircle className="w-5 h-5" />
            <p>Fort-Knox level data security</p>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <img src={ladyImg} alt="Lady on PC" />
      </div>
    </div>
  );
};

export default SayGoodbye;
