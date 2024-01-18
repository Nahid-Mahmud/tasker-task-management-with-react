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
  // state fo Editing a task
  const [editTask, setEditTask] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks?.map((task) => {
          if (task?.id === newTask?.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setIsModalOpen((prev) => !prev);
  };

  const handleEditTask = (taskEditable) => {
    // console.log(taskEditable);
    setEditTask(taskEditable);
    setIsModalOpen((prev) => !prev);
  };
  // delete function
  const handleDelete = (id) => {
    // console.log(id);

    setTasks(tasks?.filter((task) => task?.id !== id));
  };

  // delete all tasks
  const handleDeleteAll = () => {
    tasks.length = 0;
    setTasks(...tasks);
  };
  // add favourite
  const handlefabourate = (favTask) => {
    setTasks(
      tasks?.map((task) => {
        if (task?.id === favTask?.id) {
          return { ...task, isFavorite: !favTask.isFavorite };
        } else {
          return task;
        }
      })
    );
  };

  // search function

  const handleSearch = (searchInput) => {
    console.log(searchInput);
    const filteredTasks = tasks?.filter((task) => task?.title.toLowerCase().includes(searchInput.toLowerCase()));
    console.log(filteredTasks);
    setTasks([...filteredTasks]);
  };

  return (
    <section className="mb-20" id="tasks">
      {isModalOpen && (
        <AddTaskModal
          editTask={editTask}
          handleAddTask={handleAddTask}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setEditTask={setEditTask}
        />
      )}
      <div className="container">
        {/* Search Box */}
        <div className="p-2 flex justify-end">
          <Search handleSearch={handleSearch} />
        </div>
        {/* Search Box Ends */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction handleDeleteAll={handleDeleteAll} handleAddTask={() => setIsModalOpen((prev) => !prev)} />
          <TaskLilts
            handlefabourate={handlefabourate}
            handleDelete={handleDelete}
            handleEditTask={handleEditTask}
            tasks={tasks}
          />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
