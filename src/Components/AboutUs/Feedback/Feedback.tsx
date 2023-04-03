import React, { useState } from "react";
import classes from "./Feedback.module.css";

function Feedback() {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [nameErr, setNameErr] = useState<string>("");
  const [numberErr, setNumberErr] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>("");
  const [commentErr, setCommentErr] = useState<string>("");

  const onSubmit = (event: any) => {
    event.preventDefault();

    if (
      nameErr == "" &&
      emailErr == "" &&
      numberErr == "" &&
      commentErr == ""
    ) {
      const myData = {
        Name: name,
        Email: email,
        Number: number,
        Comment: comment,
      };
      console.log(myData);
    }
  };

  function nameHandler(e: any) {
    if (e.target.value === "") {
      setNameErr("cant be null");
    } else if (e.target.value.match(/[0-9]/)) {
      setNameErr("cant be numbers");
    } else {
      setNameErr("");
      setName(e.target.value);
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

  function numberHandler(e: any) {
    if (e.target.value === "") {
      setNumberErr("cant be null");
    } else {
      setNumberErr("");
      setNumber(e.target.value);
    }
  }
  function commentHandler(e: any) {
    if (e.target.value === "") {
      setCommentErr("cant be null");
    } else {
      setCommentErr("");
      setComment(e.target.value);
    }
  }

  return (
    <div className={classes.feedbackContainer}>
      <div className={classes.text}>
        <p>
          Once ordered, your products will be home-delivered as per the order
          details.
        </p>
        <p>We also offer our services globally.</p>
        <p>Write us for feedback or suggestion</p>
      </div>
      <div>
        <form onSubmit={onSubmit} className={classes.feedbackform}>
          <div className={classes.NameNum}>
            <div className={classes.NameNuminput}>
              <input
                className={classes.Name}
                type="text"
                placeholder="&nbsp;&nbsp;Name"
                onChange={nameHandler}
              />

              <span className={classes.errorMsg}>{nameErr}</span>
            </div>
            <br />
            <div className={classes.NameNuminput}>
            <input
              className={classes.PhoneNumber}
              type="number"
              placeholder="&nbsp;&nbsp;Phone number"
              onChange={numberHandler}
            />
            <span className={classes.errorMsg}>{numberErr}</span>
            </div>
          </div>
          <br />
          <input
            className={classes.Email}
            type="email"
            placeholder="&nbsp;&nbsp;Email*"
            required
            onChange={emailHandler}
          />
          <p className={classes.errorMsg}>{emailErr}</p>
          <br />
          <textarea
            className={classes.Comment}
            placeholder="&nbsp;&nbsp;Comment"
            name=""
            id=""
            cols={30}
            rows={5}
            onChange={commentHandler}
          />
          <p className={classes.errorMsg}>{commentErr}</p>
          <br />
          <button className={classes.feedbackbtn} type="submit">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
