import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./login.css";
export default function Login() {
  const API_URL = "https://api.shilpimultiplex.com/api/Auth/";

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  function Login(event) {
    let item = {phoneNumber, password};
    console.log(item);
    event.preventDefault();

    axios.post(API_URL + "Authenticate", item).then((result) => {
      console.log(result.data);
    });
  }

  return (
    <div className="BodyL">
      <section id="sec">
      <form >
        <h5>Sign In</h5>
        <div id="Lid">
          <label >Phone Number:</label>
          <div>
            <input
            id="inpL"
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
        </div>
        <div id="Lid">
          <label>Password:</label>
          <div>
            <input
            id="inpL"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <Link to="/"><button type="submit" id="but" onClick={Login}>
          Sign in
          </button>
        </Link>
      </form>
      </section>
    </div>
  );
}
