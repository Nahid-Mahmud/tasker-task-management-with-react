import Search from "./Search";
import TaskAction from "./TaskAction";
import TaskLilts from "./TaskLilts";

const TaskBoard = () => {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* Search Box */}
        <div className="p-2 flex justify-end">
          <Search />
        </div>
        {/* Search Box Ends */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <TaskLilts />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
