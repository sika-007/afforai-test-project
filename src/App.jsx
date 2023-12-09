import {
  BuiltFor,
  CreateMultiple,
  CustomizeAssistant,
  FAQs,
  FileWizard,
  Footer,
  Header,
  Hero,
  MoneyBack,
  Regardless,
  SaveYourself,
  SayGoodbye,
  Unquestionable,
  UploadFiles,
} from "./components/sections";

function App() {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <Header />
      <Hero />
      <SayGoodbye />
      <SaveYourself />
      <BuiltFor />
      <CreateMultiple />
      <CustomizeAssistant />
      <FAQs />
      <FileWizard />
      <Footer />
      <MoneyBack />
      <Regardless />
      <Unquestionable />
      <UploadFiles />
    </div>
  );
}

export default App;
