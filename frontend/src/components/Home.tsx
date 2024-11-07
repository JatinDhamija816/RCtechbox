import { useState } from "react";
import { createTask } from "../../utils/apiCalls";

const Home = () => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = async () => {
    try {
      const res: any = await createTask(newTask);

      if (res.status == 201) {
        window.alert(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className=" flex justify-center items-center">
      <input
        type="text"
        className="border-b-2 w-full bg-gray-600 border-gray-500 px-2 py-2 rounded-md mr-3 outline-none text-white"
        placeholder="Enter Text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 shadow-md shadow-white"
      >
        Add
      </button>
    </div>
  );
};

export default Home;
