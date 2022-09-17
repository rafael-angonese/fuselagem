import InputText from "./components/Forms/InputText/InputeText";
import ReackHookForm from "./components/ReackHookForm/ReactHookForm";

function App() {
  return (
    <>
      <div className=" h-screen w-full px-8">
        Hello World
        <ReackHookForm />
        <hr className="my-8" />
        <InputText
          isInvalid={false}
          id="first_name"
          label="Teste"
          placeholder="Teste"
          helperText="Teste"
          required
        />
      </div>
    </>
  );
}

export default App;
