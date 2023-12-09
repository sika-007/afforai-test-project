import techBro from "../../assets/images/image-07.png";
import { TagPrimary } from "../tags";

const FileWizard = () => {
  return (
    <div className="section-padding flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <img src={techBro} alt="tech bro" />
      </div>
      <div className="flex flex-col items-start gap-5 md:gap-8 max-w-[500px]">
        <TagPrimary>Get more out of your files</TagPrimary>
        <h1 className="section-heading">
          File Wizard - a game changing new feature
        </h1>
        <p className="section-text">
          Convert your files with less effort than ever. Afforai’s File Wizard
          feature allows you to transform your files, in limitless different
          ways. We can translate, summarize, or explain your upload in no time.
        </p>
      </div>
    </div>
  );
};

export default FileWizard;
