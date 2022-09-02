import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import Spinner from "../UI/Spinner";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //add validation

    setIsLoading(true);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAHQQcYSHh1CrdrSxSpehGhz9HrRQmnfug",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((data) => {
            let errorMessage = "auth failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            // alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );

        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //VALIDACIONES FRONT END
  const [emailError, setEmailError] = useState(false);
  const emailValidatingHandler = () => {
    const array = [...emailInputRef.current.value];
    const arrayControl = array.includes("@");
    if (emailInputRef.current.value.length === 0 || !arrayControl) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <section className="">
      <h1 className="text-center text-xl text-red-700 font-bold mt-3">
        Logueate
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center text-center p-4"
      >
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            required
            className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
            onChange={(e) => {
              setEmail(e.target.value);
              emailValidatingHandler();
            }}
            onBlur={(e) => {
              emailValidatingHandler();
            }}
          />
        </div>
        {emailError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Debe ingresar un email válido
          </p>
        ) : (
          ""
        )}
        <div className="">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            required
            className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
          />
        </div>
        <div className="">
          {!isLoading && (
            <button className="text-white bg-red-700 p-4 w-1/4 opacity-70 my-4 mx-auto rounded-lg">
              Login
            </button>
          )}
          {isLoading && <Spinner />}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
