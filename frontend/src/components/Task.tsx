import { useEffect, useState } from "react";
import { deleteTask, readTask, updateTask } from "../../utils/apiCalls";

interface Task {
  _id: string;
  task: string;
}

const TaskComponent = () => {
  const [editValue, setEditValue] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [allTask, setAllTask] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res: any = await readTask();
        if (res.success === true) {
          setAllTask(res.data);
        } else {
          console.error("Error retrieving tasks:", res.message);
        }
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }
    };

    fetchTasks();
  }, []);

  const handleUpdateTask = async (id: string) => {
    try {
      await updateTask(id, editValue);
      setAllTask((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, task: editValue } : task
        )
      );
      setEditingTaskId(null);
    } catch (error) {
      console.error("Failed to update task", error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await deleteTask(id);
      setAllTask((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Failed to delete task", error);
    }
  };

  return (
    <div className="mt-10 md:mx-auto">
      {allTask.map((task) => (
        <div
          key={task._id}
          className="md:flex justify-around items-center my-5"
        >
          <div className="bg-gray-500 px-5 py-2 rounded-lg w-full">
            {editingTaskId === task._id ? (
              <div className="flex">
                <input
                  type="text"
                  className="border-b-2 w-full bg-gray-600 border-gray-500 px-2 py-2 mr-3 rounded-md outline-none text-white"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button
                  className="bg-gray-900 text-white px-3 py-1 rounded-md hover:bg-gray-700 shadow-md shadow-white"
                  onClick={() => handleUpdateTask(task._id)}
                >
                  Save
                </button>
              </div>
            ) : (
              <p>{task.task}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => {
                setEditingTaskId(task._id);
                setEditValue(task.task);
              }}
              className="bg-yellow-600 text-white px-3 py-1 m-2 rounded-md hover:bg-yellow-700 shadow-md shadow-yellow-500"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteTask(task._id)}
              className="bg-red-600 text-white px-3 py-1 m-2 rounded-md hover:bg-red-700 shadow-md shadow-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskComponent;
