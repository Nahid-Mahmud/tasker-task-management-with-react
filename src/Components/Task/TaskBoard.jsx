import { useState } from "react";
import Search from "./Search";
import TaskAction from "./TaskAction";
import TaskLilts from "./TaskLilts";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {
  // Default Task
  // const defaultTask = {
  //   id: crypto.randomUUID(),
  //   title: "Learn React Native",
  //   description: "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
  //   tags: ["web", "react", "js"],
  //   priority: "High",
  //   isFavorite: true,
  // };

  // use State for Tasks
  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      title: "Learn React Native",
      description: "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
      tags: ["web", "react", "js"],
      priority: "High",
      isFavorite: true,
    },
  ]);
  // use state for Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setIsModalOpen((prev) => !prev);
  };

  return (
    <section className="mb-20" id="tasks">
      {isModalOpen && (
        <AddTaskModal handleAddTask={handleAddTask} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      <div className="container">
        {/* Search Box */}
        <div className="p-2 flex justify-end">
          <Search />
        </div>
        {/* Search Box Ends */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction handleAddTask={() => setIsModalOpen((prev) => !prev)} />
          <TaskLilts tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
