import react from "react"
import {BrowerRouter,Router,Route} from "react-dom-client"
import Tasks from "./components/Tasks"
import EditTask from "./components/EditTask"

function App(){
  <BrowerRouter>
    <Router>
      <Route path="/" element={<Tasks />} />
      <Route path="/edit-task/:id" element={<EditTask/>} />
    </Router>
  </BrowerRouter>
}