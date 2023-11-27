import { Fragment, useRef } from "react";
import classes from "./SignUp.module.css";

const SignUp = () => {
    const inputRef = useRef();
    const passwordRef = useRef();
    const confPassRef = useRef();
  
    const submiHandler = (event) => {
      event.preventDefault();
  
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrzCbUU-c9VlbP3aQJnl2D5wFSpyAR3Po",
        {
          method: "POST",
          body: JSON.stringify({
          email: inputRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMsg;
              if (data && data.error && data.error.message) {
                errorMsg = data.error.message;
              }
              throw new Error(errorMsg);
            });
          }
        })
        .then((data) => {
          console.log(data.email, data.idToken);
          alert("User has successfully signed up.");
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    return (
     <Fragment>  
      <section className={classes.auth}>
        <div>
          <h2>Sign Up</h2>
        </div>
  
        <form onSubmit={submiHandler} className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" ref={inputRef} required />
          </div>
  
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </div>
  
          <div className={classes.control}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              ref={confPassRef}
              required
            />
          </div>
  
          <button type="submit">Sign Up</button>
        </form>
      </section>

      <section className={classes.lowerSec}>
        <button to="/Signup">Have an account? Login</button>
      </section>
     </Fragment> 
    );
  };

export default SignUp;