import {
  BuiltFor,
  CreateMultiple,
  CustomizeAssistant,
  FileWizard,
  Header,
  Hero,
  Regardless,
  SaveYourself,
  Reviews,
  SayGoodbye,
  UploadFiles,
} from "./components/sections";

function App() {
  return (
    <div className="flex flex-col gap-10 md:gap-32">
      <Header />
      <Hero />
      <SayGoodbye />
      <SaveYourself />
      <BuiltFor />
      <CreateMultiple />
      <CustomizeAssistant />
      <Regardless />
      <FileWizard />
      <UploadFiles />
      <Reviews />
    </div>
  );
}

export default App;
