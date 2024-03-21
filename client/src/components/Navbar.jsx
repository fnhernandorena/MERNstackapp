import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-around items-center py-5 px-10 rounded-lg gap-2">
      <Link
        to={isAuthenticated ? "/profile" : "/"}
        className="text-3xl p-4 text-center font-bold bg-gradient-to-b rounded-lg 
                from-sky-800 to-red-800 duration-300 "
      >
        <h1>My Best Version</h1>
      </Link>
      <ul className="flex gap-x-2 items-center">
        {isAuthenticated ? (
          <>
            <li className="text-2xl text-center">Welcome {user.username}!</li>
            <li>
              <Link
                to="/tasks"
                className="text-xl h-full font-bold py-2 px-4 bg-sky-600 rounded-3xl duration-300 hover:bg-black"
              >
                Task
              </Link>
            </li>
            <li>
              <Link
                to="/training"
                className="text-xl font-bold py-2 px-4 bg-sky-600 rounded-3xl duration-300 hover:bg-black"
              >
                Training
              </Link>
            </li>
            <li>
              <Link
                to="/training"
                className="text-xl font-bold py-2 px-4 flex bg-sky-600 rounded-3xl duration-300 hover:bg-black"
              >
                Bad habits
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => logout()}
                className="text-xl font-bold py-2 px-4 bg-sky-600 rounded-3xl duration-300 hover:bg-black"
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="text-xl font-bold py-2 px-4 bg-sky-600 rounded-3xl duration-300 hover:bg-black"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-xl font-bold py-2 px-4 bg-sky-600 rounded-3xl duration-300 hover:bg-black"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
