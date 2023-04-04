import UserForm from "./UserForm"
import {useState} from "react"
import UserList from "./UserList"
function App() {
  const [users, setUsers] = useState([])
  
  const onUserAdd = (user) => {
    setUsers([...users, user])
  }

  return (
  <div>
    <h1>My App</h1>
    <UserForm onUserAdd={onUserAdd}/>
    <hr />
    <UserList users={users}/>
  </div>
  )
}
  
export default App
