import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-around items-center py-5 px-10 rounded-lg gap-2">
      <ul className="flex-1">
        {isAuthenticated ? (
          <div>
            <div className="flex justify-around items-center flex-row w-full py-2 flex-wrap">
              <Link
                to="/profile"
                className="text-3xl p-4 text-center font-bold bg-gradient-to-r from-blue-800 to-indigo-900 rounded-lg duration-300 hover:text-black"
              >
                <h1>My Best Version</h1>
              </Link>

              <p className="text-2xl font-bold text-center border-b-2 border-white">
                Welcome {user.username}!
              </p>
            </div>

            <div className="flex justify-around flex-row w-full flex-wrap">
              {" "}
              <Link
                to="/tasks"
                className="text-xl text-center h-full font-bold py-2 px-4 w-36 bg-sky-600 rounded-3xl duration-300 hover:bg-black m-1"
              >
                Task
              </Link>
              <Link
                to="/training"
                className="text-xl text-center font-bold py-2 w-36 px-4 bg-sky-600 rounded-3xl duration-300 hover:bg-black m-1"
              >
                Training
              </Link>
              <Link
                to="/badhabits"
                className="text-xl justify-center font-bold py-2 w-36 px-4 flex bg-sky-600 rounded-3xl duration-300 hover:bg-black m-1"
              >
                Bad habits
              </Link>
              <Link
                to="/"
                onClick={() => logout()}
                className="text-xl text-center font-bold py-2 w-36 px-4 bg-sky-600 rounded-3xl duration-300 hover:bg-black m-1"
              >
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex justify-around items-center flex-row w-full py-2 flex-wrap">
              <Link
                to="/"
                className="text-3xl p-4 text-center font-bold bg-gradient-to-r from-blue-800 to-indigo-900 rounded-lg duration-300 hover:text-black"
              >
                <h1>My Best Version</h1>
              </Link>
              <Link
                to="/login"
                className="text-xl text-center font-bold py-2 w-36 px-4 bg-sky-600 rounded-3xl duration-300 hover:bg-black m-1"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-xl text-center font-bold py-2 w-36 px-4 bg-sky-600 rounded-3xl duration-300 hover:bg-black m-1"
              >
                Register
              </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
