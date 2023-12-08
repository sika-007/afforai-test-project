const CardPrimary = ({ image, title, body, width, height }) => {
  return (
    <div
      style={{ width: width || "unset", height: height || "unset" }}
      className="max-w-[640px] w-full h-full rounded-xl overflow-hidden border"
    >
      <div className="border-b">
        <img src={image} alt={title} />
      </div>
      <div className="flex flex-col gap-1 pt-3 pb-5 px-3">
        <h4 className="card-heading">{title}</h4>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

export default CardPrimary;
