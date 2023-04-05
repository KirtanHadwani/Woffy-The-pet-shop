import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import  "./Register.css";

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

  const onSubmit = async (event: any) => {
    if (fname == "") {
      setFnameErr("Field can't be empty");
    }
    if (lname == "") {
      setLnameErr("Field can't be empty");
    }
    if (email == "") {
      setEmailErr("Field can't be empty");
    }
    if (password == "") {
      setPasswordErr("Field can't be empty");
    }
    if (confirmpassword == "") {
      setConfirmPasswordErr("Field can't be empty");
    }

    event.preventDefault();
    let userRegister = {
      firstname: fname,
      lastname: lname,
      email: email,
      password: password,
      c_password: confirmpassword,
    };
    let response = await fetch("https://woofy-db.onrender.com/register", {
      // credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(userRegister),
    });

    const res = await response.json();
    console.log(res);

    if (password !== confirmpassword) {
      setConfirmPasswordErr("Password doesn't match");
    }

    if (response.status === 200) {
      console.log("successfully registered");
      toast.success("Registered Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/Login?message=Register%20Success");
    } else {
      console.log("invalid credentials!");
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

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
    <div className="mainContainer1">
      <div className=" mainContainer vh-70   d-flex justify-content-center align-items-center ">
        <div className="formContainer col-md-6  p-5 shadow-lg border rounded-5  bg-white">
          <h2 className="text-center mb-10 text-primary">
            Welcome to Woffy The Pet Shop!
          </h2>
          <form name="registerform" onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
            
                onChange={fnameHandler}
                
              />
              <p className="errorMsg">{fnameErr}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control "
                
                onChange={lnameHandler}
                
              />
              <p className="errorMsg">{lnameErr}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
             
                onChange={emailHandler}
               
              />
              <p className="errorMsg">{emailErr}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control "
                id="exampleInputPassword1"
          
                onChange={passwordHandler}
        
              />
              <p className="errorMsg">{passwordErr}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control "
                id="exampleInputPassword1"
             
                onChange={confirmpasswordHandler}
                
              />
              <p className="errorMsg">{confirmpasswordErr}</p>
            </div>

            <div className="d-grid">
              <button className="btn btn-primary">Register</button>
              {/* {error && <span>{error}</span>} */}
              <ToastContainer autoClose={2000} />
            </div>
          </form>
          <div className="mt-3">
            <p className="mb-0  text-center" style={{ color: "black" }}>
              Already have an account? &nbsp; &nbsp;
            
              <Link to="/Login">
                <a href="" className="text-primary fw-bold">
                  Login
                </a>
              </Link>
            </p>
          </div>
        </div>
        {/* <div className="registerImg">
          <img src="/assets/register.jpg" alt="img" />
        </div> */}
      </div>
    </div>
  );
}

export default Register;
