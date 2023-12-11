import { useRef } from "react";
import { SlidingCard } from "../cards";
import { FaStar } from "react-icons/fa";
import { useDraggable } from "react-use-draggable-scroll";

const Reviews = () => {
  const slideRef1 = useRef(null);
  const slideRef1Child = useRef(null);
  const slideRef2 = useRef(null);
  const slideRef2Child = useRef(null);
  const ref1 = useDraggable(slideRef1);
  const ref2 = useDraggable(slideRef2);

  return (
    <div className="section-padding space-y-5">
      <div className="flex flex-col gap-5 items-start md:items-center">
        <div className="flex flex-col gap-5"></div>
        <div
          className={`text-orange-600 text-sm rounded-lg flex py-1 px-2 items-center gap-2 border-2 border-orange-600 bg-orange-600 bg-opacity-20 h-fit w-fit`}
        >
          <p className="text-xl">P</p>
          <p className="flex gap-1 text-orange-600">
            <FaStar className="w-3 h-3" />
            <FaStar className="w-3 h-3" />
            <FaStar className="w-3 h-3" />
            <FaStar className="w-3 h-3" />
            <FaStar className="w-3 h-3" />
          </p>
          <p>(4.9)</p>
        </div>
        <h1 className="section-heading">See what our users say</h1>
        <p className="section-text">Loved by thousands, all around the world</p>
      </div>
      <div
        ref={slideRef1}
        onMouseDownCapture={() => {
          slideRef1Child.current.classList.add("animate-pause");
          slideRef1Child.current.classList.remove("animate-play");
        }}
        onMouseUpCapture={() => {
          slideRef1Child.current.classList.add("animate-play");
          slideRef1Child.current.classList.remove("animate-pause");
        }}
        onMouseLeave={() => {
          slideRef1Child.current.classList.add("animate-play");
          slideRef1Child.current.classList.remove("animate-pause");
        }}
        {...ref1.events}
        className="w-full relative flex justify-start overflow-scroll"
      >
        <div
          ref={slideRef1Child}
          className="relative flex animate-infinite-scroll"
        >
          <div className="flex">
            <SlidingCard
              author={"Nsikak, Web developer"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
            <SlidingCard
              author={"Alec, CEO of Afforai"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
            <SlidingCard
              author={"James, Content strategist"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
            <SlidingCard
              author={"Freeman, Digital marketer"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
          </div>
          <div className="flex">
            <SlidingCard
              author={"Bolu, Head of IT"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
            <SlidingCard
              author={"Ike, Social media manager"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
            <SlidingCard
              author={"Michelle, Customer support"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
            <SlidingCard
              author={"Robert, Business developer"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
          </div>
        </div>
      </div>
      <div
        ref={slideRef2}
        onMouseDownCapture={() => {
          slideRef2Child.current.classList.add("animate-pause");
          slideRef2Child.current.classList.remove("animate-play");
        }}
        onMouseUpCapture={() => {
          slideRef2Child.current.classList.add("animate-play");
          slideRef2Child.current.classList.remove("animate-pause");
        }}
        onMouseLeave={() => {
          slideRef2Child.current.classList.add("animate-play");
          slideRef2Child.current.classList.remove("animate-pause");
        }}
        {...ref2.events}
        className="w-full flex justify-end overflow-scroll"
      >
        <div
          ref={slideRef2Child}
          className="flex animate-infinite-scroll-reverse "
        >
          <div className="flex">
            <SlidingCard
              author={"Nsikak, Web developer"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
            <SlidingCard
              author={"Alec, CEO of Afforai"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
            <SlidingCard
              author={"James, Content strategist"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
            <SlidingCard
              author={"Freeman, Digital marketer"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
          </div>
          <div className="flex">
            <SlidingCard
              author={"Bolu, Head of IT"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
            <SlidingCard
              author={"Ike, Social media manager"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
            <SlidingCard
              author={"Michelle, Customer support"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
            <SlidingCard
              author={"Robert, Business developer"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure, sapiente delectus nam, optio doloremque facilis dolorem id, at blanditiis consequatur vitae laudantium in nulla."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
