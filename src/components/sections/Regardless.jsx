import multipleLanguages from "../../assets/images/image-06.png";
import { TagPrimary } from "../tags";

const Regardless = () => {
  return (
    <div className="section-padding flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col items-start gap-5 md:gap-8 max-w-[500px]">
        <TagPrimary>Multiple Languages Supported</TagPrimary>
        <h1 className="section-heading">
          Regardless of where you are from, Afforai is for you
        </h1>
        <p className="section-text">
          We support more than 100 Languages, meaning you can seamlessly use our
          services regardless of where you are from. Our Cross Language Querying
          feature also allows flawless translation of documents.
        </p>
      </div>
      <div>
        <img src={multipleLanguages} alt="multiple languages" />
      </div>
    </div>
  );
};

export default Regardless;
