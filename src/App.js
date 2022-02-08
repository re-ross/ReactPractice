import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [users, setUsers] = useState([
    { name: "Ryan", message: "Hey!" },
    { name: "Jon", message: "I am Jon Snow" },
    { name: "Traversy", message: "I am awesome" },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
