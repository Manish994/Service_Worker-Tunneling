import reactLogo from "./assets/react.svg";
import "./App.css";
import Users from "users";

function App() {
  console.log(import.meta.env);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Users></Users>
    </>
  );
}

export default App;
