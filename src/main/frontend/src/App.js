import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/hello")
      .then((response) => {
        return response.json();
      })
      .then(function (data) {
        setPosts(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Api Test</h1><br />
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <br />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
