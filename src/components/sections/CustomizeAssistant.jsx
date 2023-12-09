import { FaFastForward, FaSearchPlus } from "react-icons/fa";
import customization from "../../assets/images/image-05.png";
import { TagNew, TagPrimary } from "../tags";
import { AiOutlinePoweroff } from "react-icons/ai";

const CustomizeAssistant = () => {
  return (
    <div className="section-padding flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <img src={customization} alt="customization" />
      </div>
      <div className="flex flex-col items-start gap-5 md:gap-8 max-w-[600px]">
        <TagPrimary className="whitespace-nowrap">
          Different modes available
        </TagPrimary>
        <h1 className="section-heading">
          Customize your assistant with a range of different modes
        </h1>
        <p className="section-text">
          Further power your questions with additional modes. Afforai allows you
          to switch between three different modes, each which have unique ways
          of utilizing our AI tools to answer your question(s).
        </p>
        <div className="flex items-start gap-3 text-purple-800">
          <FaFastForward className="w-8 h-8" />
          <div className="space-y-2">
            <div className="flex gap-5">
              <p className="font-bold">Fast Mode (default)</p>
              <TagNew>1 credit</TagNew>
            </div>
            <p>
              Quickly ask a question and receive an answer from the AI. This
              mode is most suited for applications that require only a small
              part of the documents to be scanned (ex. FAQ Chatbot, Search).
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 text-purple-800">
          <AiOutlinePoweroff className="w-8 h-8" />
          <div className="space-y-2">
            <div className="flex gap-5">
              <p className="font-bold">Powerful Mode</p>
              <TagNew>4 credits</TagNew>
            </div>
            <p>
              Get answers of extra high quality from the AI. This mode is most
              suited for applications that require inferences as well as the
              full documents to be scanned (ex. Textual Data Analysis, Search
              with Inference, Report Generation).
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 text-purple-800">
          <FaSearchPlus className="w-8 h-8" />
          <div className="space-y-2">
            <div className="flex gap-5">
              <p className="font-bold">Google Mode</p>
              <TagNew>5 credits</TagNew>
            </div>
            <p>
              Supplement your answers with the top 3 results from Google Search.
              This adds extra reliability to back up our already incredibly
              accurate answers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeAssistant;
