import { Form } from "react-final-form";
import "./App.css";

const App = () => {
  const onSubmit = () => {
    console.log('submit button')
  }

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <Form 
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} noValidate>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
