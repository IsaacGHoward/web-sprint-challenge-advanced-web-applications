import React, { useState }  from "react";
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const login = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", {username: 'Lambda School', password: 'i<3Lambd4'}).
      then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        //props.history.push("/friendslist");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
      <form onSubmit={(e) => login(e)}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Log in</button>
        {isLoading &&
          <div>Loading ...</div>
        }
      </form>
    </div>
    </>
  );
};

export default Login;
