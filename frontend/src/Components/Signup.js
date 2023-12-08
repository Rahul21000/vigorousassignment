import React, { useState } from "react";
import "./Login.css";

function AddUser() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  console.log(input);
  const handleonchange = (e) => {
    setInput();
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="adduser_div">
      <form onSubmit={handlesubmit}>
        Username
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={handleonchange}
        />
        Email
        <input
          type="email"
          name="email"
          value={input.password}
          onChange={handleonchange}
        />{" "}
        <br />
        Password
        <input
          type="text"
          name="password"
          value={input.cpassword}
          onChange={handleonchange}
        />{" "}
        <br />
        Conform Password
        <input
          type="text"
          name="cpassword"
          value={input.last_name}
          onChange={handleonchange}
        />{" "}
        <br />
        <div className="button">
          <button type="reset">Reset</button>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}
export default AddUser;
