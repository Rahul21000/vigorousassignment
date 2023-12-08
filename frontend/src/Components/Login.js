import React, { useState } from "react";
import "./Login.css";

function AddUser() {
  const [input, setInput] = useState({ username: "", password: "" });
  console.log(input);
  const handleonchange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setInput({});
  };

  return (
    <div className="adduser_div">
     <div className="login_text">Login</div>
      <form onSubmit={handlesubmit}>
        Username
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={handleonchange}
        />
        Password
        <input
          type="text"
          name="password"
          value={input.password}
          onChange={handleonchange}
        />{" "}
        <br />
        <div className="button">
          <button type="reset">Reset</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
export default AddUser;
