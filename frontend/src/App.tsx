import Home from "./components/Home";
import Task from "./components/Task";

const App = () => {
  return (
    <div className="bg-gray-800 min-h-screen p-5 font-serif ">
      <div className="md:max-w-screen-md md:mx-auto md:my-10">
        <Home />
        <Task />
      </div>
    </div>
  );
};

export default App;
