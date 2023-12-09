import { TagPrimary } from "../tags";
import upload from "../../assets/images/image-08.png";

const UploadFiles = () => {
  return (
    <div className="section-padding flex flex-col items-start md:items-center gap-5 md:gap-8">
      <div className="flex flex-col text-start md:text-center items-start md:items-center gap-5 md:gap-8 max-w-[600px]">
        <TagPrimary>Seamless Integrations - Coming Soon</TagPrimary>
        <h1 className="section-heading">
          Upload Files directly from Google Drive, One Drive & Dropbox
        </h1>
        <p className="section-text">
          Afforai allows you to upload files directly from Google Drive, One
          Drive & Dropbox, meaning your experience will be smooth sailing
          regardless of your preferred
        </p>
        <div>
          <img src={upload} alt="upload files" />
        </div>
      </div>
    </div>
  );
};

export default UploadFiles;
