import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const rollNumber = "23wh1a0524"; // change to your roll number

  useEffect(() => {
    fetch("http://bvrithcloud.com/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-student-id": rollNumber,
      },
    })
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Task List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>
                <button onClick={() => navigate(`/edit-task/${task._id}`)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;