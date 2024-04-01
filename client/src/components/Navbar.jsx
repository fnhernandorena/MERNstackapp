import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-around items-center py-5 px-10 rounded-lg gap-2">
      <ul className="flex-1">
        {isAuthenticated ? (
          <div>
            <div className="flex justify-around items-center flex-row w-full py-2 flex-wrap">
              <NavLink
                to="/profile"
                className="text-3xl p-4 text-center font-bold bg-gradient-to-tr from-blue-500 rounded-lg duration-300 hover:text-black"
              >
                <h1>My Best Version</h1>
              </NavLink>

              <p className="text-2xl font-bold text-center border-b-2 border-white">
                Welcome {user.username}!
              </p>
            </div>

            <div className="flex justify-around flex-row w-full flex-wrap">
              {" "}
              <NavLink
                to="/tasks"
                className="text-xl text-center h-full font-bold py-2 px-4 w-36 bg-sky-600 rounded-3xl duration-300 hover:bg-black m-1"
              >
                Task
              </NavLink>
              <NavLink
                to="/training"
                className="text-xl text-center font-bold py-2 w-36 px-4 bg-sky-600 rounded-3xl duration-300 hover:bg-black m-1"
              >
                Training
              </NavLink>
              <NavLink
                to="/badhabits"
                className="text-xl justify-center font-bold py-2 w-36 px-4 flex bg-sky-600 rounded-3xl duration-300 hover:bg-black m-1"
              >
                Bad habits
              </NavLink>
              <NavLink
                to="/"
                onClick={() => logout()}
                className="text-xl text-center font-bold py-2 w-36 px-4 bg-sky-600 rounded-3xl duration-300 hover:bg-black m-1"
              >
                Logout
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="flex justify-around items-center flex-row w-full py-2 flex-wrap">
              <NavLink
                to="/"
                className="text-3xl p-4 text-center font-bold bg-gradient-to-tr from-blue-500 rounded-lg duration-300 hover:text-black"
              >
                <h1>My Best Version</h1>
              </NavLink>
              <NavLink
                to="/login"
                className="text-xl text-center font-bold py-2 w-36 px-4 bg-sky-600 rounded-3xl duration-300 hover:bg-black m-1"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="text-xl text-center font-bold py-2 w-36 px-4 bg-sky-600 rounded-3xl duration-300 hover:bg-black m-1"
              >
                Register
              </NavLink>
          </div>
        )}
      </ul>
    </nav>
  );
}
