import React from "react";
import DataService from "./Service/DataService";
import axios from "axios";
import './register.css';

const API_URL = "https://api.shilpimultiplex.com/api/Auth/";

//const [otp, setOtp] = useState('');

let Uid;

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      otp: "",
    };
    this.changenamehandler = this.changenamehandler.bind(this);
    this.changemailhandler = this.changemailhandler.bind(this);
    this.changephonehandler = this.changephonehandler.bind(this);
    this.changepasshandler = this.changepasshandler.bind(this);
    this.changOTPhandler = this.changOTPhandler.bind(this);
  }

  saveUser = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
      e.persist();
    }

    let user = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    };
    console.log("user => " + JSON.stringify(user));

    DataService.createUser(user).then((Response) => {
      console.log("user id : ", Response.data.id);
      Uid = Response.data.id;

      DataService.sendOTP(Response.data.id).then((Resp) => {
        console.log(Resp);
      });
    });

    // "a81c54b9-b10d-428f-b721-9398a97af022"
    //let Uid = {uid : Object.uid}
  };

  VeryfiyUser = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
      e.persist();
    }
    axios
      .post(API_URL + "VerifyOtp?uid=" + Uid + "&otp=" + this.state.otp)
      .then((result) => {
        if (result.request.status === 200) {
          console.log(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changenamehandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changemailhandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changephonehandler = (event) => {
    this.setState({ phone: event.target.value });
  };

  changepasshandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changOTPhandler = (event) => {
    this.setState({ otp: event.target.value });
  };

  render() {
    return (
      <>
        <section>
         
          <form id="sec">
            <h5>Sign up</h5>
            <div id="Lid">
            <label id="lab">Name : </label>
            <input
              placeholder="Name"
              name="name"
              autoComplete="off"
              className="form-control"
              value={this.state.name}
              onChange={this.changenamehandler}
            />
            </div>
            
            <div id="Lid">
            <label id="lab">Email : </label>
            <input
              placeholder="Email"
              name="email"
              autoComplete="off"
              className="form-control"
              value={this.state.email}
              onChange={this.changemailhandler}
            />
            </div>
            <div id="Lid">
            <label id="lab">Phone : </label>
            <input
              placeholder="phone"
              name="phone"
              autoComplete="off"
              className="form-control"
              value={this.state.phone}
              onChange={this.changephonehandler}
            />
            </div>
            <div id="Lid">
            <label id="lab">Password : </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              autoComplete="off"
              className="form-control"
              value={this.state.password}
              onChange={this.changepasshandler}
            />
            </div>

            <button id="but" onClick={this.saveUser}>
              Create user
            </button>
          </form>
        </section>
        <form id="sec2">
          {/*modal for otp*/}
          <h5 id="h">Enter your OTP</h5>
          <div id="LidOtp">
          <label id="lab">GetOtp : </label>
          <input
            type="text"
            name="Otp"
            placeholder="Enter Otp"
            value={this.state.otp}
            onChange={this.changOTPhandler}
          />
          </div>
          
          <button id="but" type="button" onClick={this.VeryfiyUser}>
            Ok
          </button>
        </form>
      </>
    );
  }
}

export default Register;
