import React, { Children } from "react";
import { Gantt, ViewMode } from "gantt-task-react";
import moment from "moment";
import "gantt-task-react/dist/index.css";
const currentDate = new Date();
const GanttChart = () => {
  const dateFormart = (value) => {
    const date = new Date(value);
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    return formattedDate;
  };
  const dateFormatter = (value) => {
    const parts = value.split("-");
    const formattedDate = `${parts[1]}/${parts[2]}/${parts[0]}`;
    return new Date(formattedDate);
  };
  const handleExpanderClick = (task, children) => {
    console.log("Task expanded/collapsed:", task);
    const date = dateFormart(task.start);
    console.log(date);
    const dateformatted = dateFormatter(date);
    console.log(dateformatted);
  };
  let tasks = [
    {
      start: dateFormatter("2024-1-4"),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Some Project",
      id: "ProjectSample",
      progress: 25,
      type: "project",
      haha: "",
      hideChildren: false,
    },
    {
      start: dateFormatter("2024-1-4"),
      end: dateFormatter("2024-1-7"),
      name: "Idea dddd",
      id: "Task 0",
      progress: 45,
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      name: "Research",
      id: "Task 1",
      progress: 25,
      dependencies: ["Task 0"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: "Discussion with team",
      id: "Task 2",
      progress: 10,
      dependencies: ["Task 1"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      name: "Developing",
      id: "Task 3",
      progress: 2,
      dependencies: ["Task 2"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: "Review",
      id: "Task 4",
      type: "task",
      progress: 70,
      dependencies: ["Task 2"],
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Release",
      id: "Task 6",
      progress: currentDate.getMonth(),
      type: "milestone",
      dependencies: ["Task 4"],
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      name: "Party Time",
      id: "Task 9",
      progress: 0,
      isDisabled: true,
      type: "task",
    },
  ];
  return (
    <div>
      <Gantt
        tasks={tasks}
        onDateChange={(task, children) => handleExpanderClick(task, children)}
        onProgressChange={(task, children) =>
          console.log("onProgressChange", task, children)
        }
        timeStep={1000}
        viewMode={ViewMode.Day}
      />
    </div>
  );
};

export default GanttChart;
