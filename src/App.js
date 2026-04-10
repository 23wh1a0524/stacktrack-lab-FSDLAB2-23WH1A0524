import react from "react"
import {BrowerRouter,Router,Routes} from "react-dom-client"
import Tasks from "./components/Tasks"
import TasksDetails from "./components/TasksDetails"

function App(){
  <BrowerRouter>
    <Router>
      <Route path="/" element={<Tasks />} />
      <Route path="/task/:id" element={<TasksDetails/>} />
    </Router>
  </BrowerRouter>
}