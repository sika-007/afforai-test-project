import burnoutVsSatisfaction from "../../assets/images/image-03.png";
import { TagPrimary } from "../tags";

const SaveYourself = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-8 section-padding text-left md:text-center items-start md:items-center">
      <div className="flex flex-col items-start md:items-center max-w-[600px] gap-5 md:gap-8">
        <TagPrimary className="w-40">10x your productivity</TagPrimary>
        <h1 className="section-heading">
          Save yourself from stress & streamline your workflow
        </h1>
        <p className="section-text">
          The average worker spends 9 hours per week looking through & gathering
          information from thick stacks of documents. With Afforai, you can save
          yourself 8 hours per week (plus a lot of headaches).
        </p>
      </div>
      <img src={burnoutVsSatisfaction} alt="burnout vs satisfaction" />
    </div>
  );
};

export default SaveYourself;
