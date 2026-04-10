import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const rollNumber = "23wh1a0524";

  useEffect(() => {
    fetch("http://bvrithcloud.com/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-student-id": rollNumber,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // IMPORTANT FIX
        if (Array.isArray(data)) {
          setTasks(data);
        } else if (Array.isArray(data.tasks)) {
          setTasks(data.tasks);
        } else if (Array.isArray(data.data)) {
          setTasks(data.data);
        } else {
          setTasks([]);
        }
      })
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
          {tasks.length > 0 ? (
            tasks.map((task) => (
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
            ))
          ) : (
            <tr>
              <td colSpan="4">No Tasks Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;