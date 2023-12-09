import { TagNew } from "../tags";

const CardPrimary = ({ image, title, body, width, height, isNew }) => {
  return (
    <div className="flex flex-col rounded-xl h-full w-full overflow-hidden border">
      <div className="overflow-hidden w-full h-full">
        <img src={image} className="w-full h-full object-cover" alt={title} />
      </div>
      <div className="flex flex-col bg-white h-fit gap-1 pt-3 pb-5 px-3">
        <div className="flex items-center gap-2">
          <h4 className="card-heading">{title}</h4>
          {isNew ? <TagNew>NEW</TagNew> : ""}
        </div>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

export default CardPrimary;
