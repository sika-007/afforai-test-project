import { CardPrimary } from "../cards";
import crossQuery from "../../assets/images/image-05.png";
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
      <div className=" grid grid-cols-5 grid-flow-row w-full">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2">
          <CardPrimary
            title="Cross Language Querying"
            body="Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help."
            image={crossQuery}
          />
        </div>
        <div className="col-start-3 col-end-6 row-start-1 row-end-2">
          <CardPrimary
            title="Cross Language Querying"
            body="Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help."
            image={crossQuery}
          />
        </div>
        <div>
          <CardPrimary
            title="Cross Language Querying"
            body="Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help."
            image={crossQuery}
          />
        </div>
        <div>
          <CardPrimary
            title="Cross Language Querying"
            body="Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help."
            image={crossQuery}
          />
        </div>
        <div>
          <CardPrimary
            title="Cross Language Querying"
            body="Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help."
            image={crossQuery}
          />
        </div>
      </div>
    </div>
  );
};

export default BuiltFor;
