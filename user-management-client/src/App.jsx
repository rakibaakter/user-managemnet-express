import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const hanldeAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("inside post response", data);
        const newUser = [...users, data];
        setUsers(newUser);
        form.reset();
      });
  };

  return (
    <>
      <h1>User Management Client Site</h1>
      <h3>Total Users {users.length}</h3>

      <form onSubmit={hanldeAddUser}>
        <input type="text" name="name" id="" placeholder="name" />
        <br />
        <input type="email" name="email" placeholder="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>

      <div>
        {users.map((user) => (
          <h4 key={user.id}>
            {user.id} : {user.name} - {user.email}
          </h4>
        ))}
      </div>
    </>
  );
}

export default App;
