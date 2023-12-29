import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactRethinkdb from "react-rethinkdb";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const client = ReactRethinkdb.DefaultSession.connect({
      host: "https://query.capi.work",
    });

    client
      .table("test")
      .run()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    
    <div>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
