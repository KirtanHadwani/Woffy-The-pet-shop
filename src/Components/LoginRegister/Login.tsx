import React, { useState } from "react";
import classes from "./Login.module.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";




function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [passwordErr, setPasswordErr] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    if(email.length==0 || password.length==0)
    {
        // alert("type correct values")
        setEmailErr(true);
        setPasswordErr(true)
    }
    // else
    // {
    //     alert("all good")
    // }

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log("login successfully");
        toast.success("Login Successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error("Invalid Email or Password", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setError(errorMessage);
      });
  };

  function emailHandler(e: any){
    let item=e.target.value;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(item.match(emailRegex) )
    {
      setEmailErr(false)
    }
    else
    {
      setEmailErr(true)
    }
    setEmail(item)
}
function passwordHandler(e: any){
    let item=e.target.value;
    if(item.length<8 )
    {
      setPasswordErr(true)
    }
    else
    {
      setPasswordErr(false)
    }
    setPassword(item)

}

  return (
    <div>
      <div className="vh-100 d-flex justify-content-center align-items-center ">
        <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
          <h2 className="text-center mb-4 text-primary">Login</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control border border-primary"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                // onChange={(e) => setEmail(e.target.value)}
                onChange={emailHandler}
                
                value={email}
              />{emailErr?<span className={classes.errorMsg}>Email Not Valid</span>:""}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control border border-primary"
                id="exampleInputPassword1"
                // onChange={(e) => setPassword(e.target.value)}
                onChange={passwordHandler}
               
                value={password}
              />{passwordErr?<span className={classes.errorMsg}>Password Not Valid</span>:""}
            </div>
            <p className="small">
              <a className="text-primary" href="forget-password.html">
                Forgot password?
              </a>
            </p>
            <div className="d-grid">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
              {/* {error && <span>{error}</span>} */}
        <ToastContainer />
            </div>
          </form>
          <div className="mt-3">
            <p className="mb-0  text-center" style={{ color: 'black' }}>
              Don't have an account? &nbsp; &nbsp; 
              {/* <a href="Register.tsx" className="text-primary fw-bold">
                Sign Up
              </a> */}
              <Link to='/Register'><a href="" className="text-primary fw-bold">Sign up</a></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
