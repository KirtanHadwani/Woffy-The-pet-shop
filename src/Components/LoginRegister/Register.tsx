import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../firebase";
import classes from "./Register.module.css";

function Register() {
  const navigate = useNavigate();
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");
  const [fnameErr, setFnameErr] = useState<string>();
  const [lnameErr, setLnameErr] = useState<string>();
  const [emailErr, setEmailErr] = useState<string>();
  const [passwordErr, setPasswordErr] = useState<string>();
  const [confirmpasswordErr, setConfirmPasswordErr] = useState<string>();
  const [error, setError] = useState<string>("");

  const onSubmit = async(event: any) => {
    event.preventDefault();

    let response = await fetch("http://localhost:8000/register", {
      credentials : "include",
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({
        firstName: fname,
        lastName: lname,
        email: email,
        password: password,
        c_password: confirmpassword
      }),
    });

    const res = await response.json();
    console.log(res);

    if (password !== confirmpassword) {
      setConfirmPasswordErr("Password doesn't match");
    }

    // if (
    //   fnameErr == "" &&
    //   emailErr == "" &&
    //   lnameErr == "" &&
    //   passwordErr == "" &&
    //   confirmpasswordErr == ""
    // ) {
    //   const myData = {
    //     firstName: fname,
    //     lastName: lname,
    //     email: email,
    //     password: password,
    //   };
    //   console.log(myData);
    // }
  };

  function fnameHandler(e: any) {
    if (e.target.value === "") {
      setFnameErr("cant be null");
    } else if (e.target.value.match(/[0-9]/)) {
      setFnameErr("cant be numbers");
    } else {
      setFnameErr("");
      setFname(e.target.value);
    }
  }
 

  function lnameHandler(e: any) {
    if (e.target.value === "") {
      setLnameErr("cant be null");
    } else if (e.target.value.match(/[0-9]/)) {
      setLnameErr("cant be numbers");
    } else {
      setLnameErr("");
      setLname(e.target.value);
    }
  }

  function emailHandler(e: any) {
    if (e.target.value === "") {
      setEmailErr("cant be null");
    } else if (
      !e.target.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setEmailErr("Email not valid");
    } else {
      setEmailErr("");
      setEmail(e.target.value);
    }
  }
  function passwordHandler(e: any) {
    if (e.target.value === "") {
      setPasswordErr("Can't be empty");
    } else if (e.target.value.length < 8) {
      setPasswordErr("Password length must be 8 or more");
    } else {
      setPasswordErr("");
      setPassword(e.target.value);
    }
  }
  function confirmpasswordHandler(e: any) {
    if (e.target.value === "") {
      setConfirmPasswordErr("Can't be empty");
    } else if (e.target.value.length < 8) {
      setConfirmPasswordErr("Password length must be 8 or more");
    } else {
      setConfirmPasswordErr("");
      setConfirmPassword(e.target.value);
    }
  }

  return (
    <div>
      <div className="vh-100 d-flex justify-content-center align-items-center ">
        <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
          <h2 className="text-center mb-4 text-primary">
            Welcome to Woffy The Pet Shop!
          </h2>
          <form name="registerform" onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control border border-primary"
                // onChange={(e) => setEmail(e.target.value)}
                onChange={fnameHandler}
                // onClick={fnamenovalidate}
                // value={fname}
              />
              <p className={classes.errorMsg}>{fnameErr}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control border border-primary"
                // onChange={(e) => setEmail(e.target.value)}
                onChange={lnameHandler}
                // onClick={lnamenovalidate}
                // value={lname}
              />
              <p className={classes.errorMsg}>{lnameErr}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control border border-primary"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                // onChange={(e) => setEmail(e.target.value)}
                onChange={emailHandler}
                // onClick={emailnovalidate}
                // value={email}
              />
              <p className={classes.errorMsg}>{emailErr}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control border border-primary"
                id="exampleInputPassword1"
                // onChange={(e) => setPassword(e.target.value)}
                onChange={passwordHandler}
                // onClick={passnovalidate}
                // value={password}
              />
              <p className={classes.errorMsg}>{passwordErr}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control border border-primary"
                id="exampleInputPassword1"
                // onChange={(e) => setPassword(e.target.value)}
                onChange={confirmpasswordHandler}
                // onClick={cpassnovalidate}
                // value={confirmpassword}
              />
              <p className={classes.errorMsg}>{confirmpasswordErr}</p>
            </div>

            <div className="d-grid">
              <button className="btn btn-primary">Register</button>
              {/* {error && <span>{error}</span>} */}
              <ToastContainer />
            </div>
          </form>
          <div className="mt-3">
            <p className="mb-0  text-center" style={{ color: "black" }}>
              Already have an account? &nbsp; &nbsp;
              {/* <a href="Register.tsx" className="text-primary fw-bold">
                    Sign Up
                  </a> */}
              <Link to="/Login">
                <a href="" className="text-primary fw-bold">
                  Login
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
