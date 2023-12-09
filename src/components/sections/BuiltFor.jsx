import { CardPrimary } from "../cards";
import crossQuery from "../../assets/images/image-05.png";
import multipleFile from "../../assets/images/image-14.png";
import valuableData from "../../assets/images/image-16.png";
import builtIn from "../../assets/images/image-17.png";
import unBreakable from "../../assets/images/image-13.png";
import { TagPrimary } from "../tags";

const BuiltFor = () => {
  return (
    <div className="section-padding flex flex-col gap-5 md:gap-8 items-start md:items-center">
      <div className="flex flex-col items-start md:items-center text-center max-w-[400px] gap-5 md:gap-8">
        <TagPrimary className="whitespace-nowrap">Why choose us?</TagPrimary>
        <h1 className="section-heading">Built for the user</h1>
        <p className="section-text">
          Afforai is where exceptional customer focus meets exceptional
          technology
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-5 auto-rows gap-3 w-full h-fit">
        <div className="md:col-span-2 md:row-span-1">
          <CardPrimary
            title="Cross Language Querying"
            body="Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help."
            image={crossQuery}
            isNew={true}
          />
        </div>
        <div className="md:col-span-3 md:row-span-1">
          <CardPrimary
            title="Multiple file types supported"
            body="Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!"
            image={multipleFile}
          />
        </div>
        <div className="md:col-span-3 md:row-span-1">
          <CardPrimary
            title="Valuable Data Citation"
            body="Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never loose your time validating information again."
            image={valuableData}
            isNew={true}
          />
        </div>
        <div className="md:col-span-2 md:row-span-2">
          <CardPrimary
            title="Unbreakable Security"
            body="Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us."
            image={unBreakable}
            isNew={true}
          />
        </div>
        <div className="md:col-span-3 md:row-span-1">
          <CardPrimary
            title="Built in Document Viewer"
            image={builtIn}
            body="Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations."
          />
        </div>
      </div>
    </div>
  );
};

export default BuiltFor;
