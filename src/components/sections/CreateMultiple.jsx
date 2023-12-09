import { ButtonFilled, ButtonPrimary } from "../buttons";
import chatbots from "../../assets/images/image-04.png";
import { TagPrimary } from "../tags";

const CreateMultiple = () => {
  return (
    <div className="section-padding flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col items-start gap-5 md:gap-8 max-w-[500px]">
        <TagPrimary className="whitespace-nowrap text-center">
          Most versatile
        </TagPrimary>
        <h1 className="section-heading">
          Create multiple chatbots for different purposes
        </h1>
        <p className="section-text">
          Legal documents? Summarising a book? Extracting data from a website?
          We allow you to create multiple chatbots at one time, so you can use
          Afforai for a whole range of purposes.
        </p>
        <div className="flex gap-3">
          <ButtonFilled className="whitespace-nowrap">Get started</ButtonFilled>
          <ButtonPrimary>View pricing</ButtonPrimary>
        </div>
      </div>
      <div>
        <img src={chatbots} alt="chatbots" />
      </div>
    </div>
  );
};

export default CreateMultiple;
