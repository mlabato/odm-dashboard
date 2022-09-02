import { FaHome } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context"

function Header() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout()
    navigate("/login")
  }

  return (
    <section className=" w-full flex flex-col justify-center">
      <article className="flex flex-col ">
        <div className=" md:h-[120px] md:w-[120px] h-[50px] w-[50px] mx-auto ">
          <img src="/logo.png" alt="" className=" " />
        </div>
        <div className=" my-auto text-red-700 text-4xl text-center">
          DASHBOARD
        </div>
      </article>
      <article className="absolute text-red-700 text-4xl p-4 left-0 -top-100 flex flex-row">
        {isLoggedIn && (
          <a href="/" className="ml-4">
            {" "}
            <FaHome />{" "}
          </a>
        )}

        {isLoggedIn && (
          <button className="ml-4" onClick={logoutHandler}>
            {" "}
            <FaSignOutAlt />{" "}
          </button>
        )}
      </article>
    </section>
  );
}

export default Header;
