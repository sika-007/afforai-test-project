import { ButtonFilled } from "../buttons";
import ButtonEmpty from "../buttons/ButtonPrimary";
import people from "../../assets/images/image-18.png";
import demo from "../../assets/images/image-02.png";
import { AnimatedTag } from "../tags";

const Hero = () => {
  return (
    <div className="mt-20 section-padding flex flex-col gap-8 justify-center items-center">
      <h1 className="section-heading text-left md:text-center max-w-[600px]">
        Your second brain for maximizing productivity
      </h1>
      <p className="section-text text-left md:text-center max-w-[600px]">
        Afforai is an AI chatbot that searches, summarizes, and translates info
        from multiple sources to produce trustworthy research. Feed lengthy
        research documents to stacks of dry compliance requirements and extract
        the key findings you need.
      </p>
      <div className="overflow-hidden w-full flex justify-center">
        <div className="flex gap-4 w-full justify-center animate-infinite-scroll md:animate-none">
          <div className="flex gap-4 whitespace-nowrap">
            <AnimatedTag className="shrink-0 whitespace-nowrap w-fit">
              Summarize Key Findings
            </AnimatedTag>
            <AnimatedTag className="shrink-0 whitespace-nowrap w-fit">
              Compare Between Documents
            </AnimatedTag>
            <AnimatedTag className="shrink-0 whitespace-nowrap w-fit">
              Search For Answers
            </AnimatedTag>
            <AnimatedTag className="shrink-0 whitespace-nowrap w-fit">
              Ask in Any Language
            </AnimatedTag>
          </div>
          <div className="flex gap-4 md:hidden shrink-0">
            <AnimatedTag className="shrink-0 whitespace-nowrap w-fit">
              Summarize Key Findings
            </AnimatedTag>
            <AnimatedTag className="shrink-0 whitespace-nowrap w-fit">
              Compare Between Documents
            </AnimatedTag>
            <AnimatedTag className="shrink-0 whitespace-nowrap w-fit">
              Search For Answers
            </AnimatedTag>
            <AnimatedTag className="shrink-0 whitespace-nowrap w-fit">
              Ask in Any Language
            </AnimatedTag>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full max-w-[600px] gap-3 md:gap-4">
        <ButtonFilled className="w-full md:w-60">Get started</ButtonFilled>
        <ButtonEmpty className="w-full md:w-60">View pricing</ButtonEmpty>
      </div>
      <div className="mb-72 relative w-full max-w-[1000px] hidden md:block h-[300px] bg-gradient-to-b from-transparent to-violet-200 rounded-3xl">
        <div className="absolute -z-0 inset-16 top-20">
          <img className="w-full" src={demo} alt="demo" />
          <div className="flex flex-col items-center">
            <p className="section-text">
              Loved by 20,000+ users around the world
            </p>
            <img src={people} className="w-52" alt="people" />
          </div>
        </div>
      </div>
      <div className="flex md:hidden flex-col items-center">
        <p className="section-text">Loved by 20,000+ users around the world</p>
        <img src={people} className="w-52" alt="people" />
      </div>
    </div>
  );
};

export default Hero;
