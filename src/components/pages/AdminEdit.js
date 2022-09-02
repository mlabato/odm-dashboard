import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Layout from "../UI/Layout"
import { useNavigate } from "react-router-dom";

function AdminEdit() {
  //INFO ADMIN A EDITAR
  const [user, setUser] = useState({ admin: [] });
  const { id } = useParams();

  useEffect(() => {
    fetch("/users/" + id)
      .then((response) => {
        return response.json();
      })
      .then((user) => setUser(user))
      .catch((errors) => {
        console.log(errors);
      });
  });

  //HOOKS PARA ENVIO DE FORM AL BE
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //HOOK VALIDACION BE
  const [isValidated, setIsValidated] = useState(true);

  const validatingHandler = () => {
    setIsValidated(false);
  };

  //REFS
  const usernameRef = useRef();
  const emailRef = useRef();

  //ENVIO DE FORM Y RUTEO
  const navigate = useNavigate();

  const postData = async (e) => {
    e.preventDefault();

    // const form = new FormData();

    // form.append("username", username);
    // form.append("email", email);
    // form.append("password", password);

    const data = {
      id: id,
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await axios({
        url: "http://localhost:3000/useredit",
        method: "POST",
        data: data,
      });

      if (response.status === 201) {
        navigate("/dashboard/admin");
        if (!isValidated) {
          validatingHandler();
        }
      }
    } catch (error) {
      validatingHandler();
      console.log(error);
    }
  };

  //ELIMINAR PRODUCTO
  const deleteData = async (e) => {
    e.preventDefault();

    debugger;

    const deletedId = { id: id };

    try {
      const response = await axios({
        url: "http://localhost:3000/userdelete/",
        method: "POST",
        data: deletedId,
      });
      if (response.status === 201) {
        navigate("/dashboard/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //VALIDACIONES FRONT END
  const [emailError, setEmailError] = useState(false);
  const emailValidatingHandler = () => {
    const array = [...emailRef.current.value];
    const arrayControl = array.includes("@");
    if (emailRef.current.value.length === 0 || !arrayControl) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const [usernameError, setUsernameError] = useState(false);
  const usernameValidatingHandler = () => {
    if (
      usernameRef.current.value.length === 0 ||
      usernameRef.current.value.length < 6
    ) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
  };

  return (
    <Layout>
      <h1 className="text-center text-xl text-red-700 font-bold mt-3">
        Estas modificando el perfil de {user.username}
      </h1>
      <form
        action="http://google.com"
        method="POST"
        onSubmit={postData}
        className="flex flex-col justify-center text-center p-4 "
      >
        {/*<----------------------------USERNAME---------------------------> */}
        <label for="username" className="text-red-700 mt-2 text-center">
          {" "}
          Elegí el username{" "}
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder={user.username}
          className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
          required
          onChange={(e) => {
            setUsername(e.target.value);
            usernameValidatingHandler();
          }}
          ref={usernameRef}
          onBlur={() => usernameValidatingHandler()}
        />

        {usernameError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            El username debe tener al menos 6 caracteres
          </p>
        ) : (
          ""
        )}

        {/*<----------------------------EMAIL---------------------------> */}
        <label for="email" className="text-red-700 mt-2 text-center">
          {" "}
          Ingresá su email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={user.email}
          className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
          onChange={(e) => {
            setEmail(e.target.value);
            emailValidatingHandler();
          }}
          onBlur={(e) => {
            emailValidatingHandler();
          }}
          ref={emailRef}
        />

        {emailError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Debe ingresar un email válido
          </p>
        ) : (
          ""
        )}

        {/*<----------------------------PASSWORD---------------------------> */}
        <label for="password" className="text-red-700 mt-2 text-center">
          {" "}
          Elegí su password{" "}
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-red-700 p-4 w-1/4 opacity-70 my-4 mx-auto rounded-lg"
        >
          {" "}
          Enviar{" "}
        </button>

        {isValidated === false ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            El email o el username están registrados
          </p>
        ) : (
          ""
        )}
      </form>

      {/*ELIMINAR */}
      <form method="POST" onSubmit={deleteData} className="mx-auto text-center">
        <button
          type="submit"
          className="text-white bg-red-900 p-4 w-1/4 opacity-70 my-4 mx-auto  rounded-lg"
        >
          {" "}
          Eliminar{" "}
        </button>
      </form>
    </Layout>
  );
}

export default AdminEdit;
