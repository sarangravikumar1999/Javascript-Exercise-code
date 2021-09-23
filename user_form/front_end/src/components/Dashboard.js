import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  useEffect(() => {
    getTodos();
  }, []);

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const history = useHistory()

  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/todos", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(todos);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/todos",
        { todo: input },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      console.log(response);
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/todos/${id}`,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleComplete = async(id) => {
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/todos/${id}`,{completed:true},
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout =()=>{
      localStorage.removeItem("token")
      history.push("/login")
  }

  return (
    <>
      <h1>Hello Welcome to react course</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
        {todos.map((todo) => {
          return (
            <div key={todo._id}>
              {" "}
              {todo.todo}
              <button onClick={() => handleDelete(todo._id)}>
                Delete
              </button>{" "}
              <button onClick={() => handleComplete(todo._id)}>
                Completed
              </button>
            </div>
          );
        })}
      </form>
      <button onClick = {handleLogout}>Logout</button>
    </>
  );
};
export default Dashboard;
