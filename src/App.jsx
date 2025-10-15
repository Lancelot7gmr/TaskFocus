import './App.css'
import Taskform from './Components/Taskform'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'

function App() {
  return (
    <>
      <h1>Welcome to <i>Task Focus</i></h1>
      <h2>Your Perfect Task Manager</h2>
      < Taskform />
      < TaskList />
      < ProgressTracker />
      <button>Clear All Tasks</button>
    </>
  )
}

export default App
