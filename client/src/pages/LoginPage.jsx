import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: SigninErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  
  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated]);

  return (
    <div className="flex justify-center">
    <div className="flex flex-col w-96">
      <h1 className="text-4xl my-2">Login</h1>
      {SigninErrors && SigninErrors.map((error, i) => (
        <div key={i} className="p-1 m-1 rounded-lg bg-red-500 text-white">
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="bg-zinc-700 w-full my-1 p-1 text-xl rounded-lg"
          autoFocus
        />
        {errors.email && <p className="text-red-500">Email is required</p>}
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          className="bg-zinc-700 w-full my-1 p-1 text-xl rounded-lg"
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}
        <button type="submit"  className="w-full bg-sky-600 my-2 p-2 rounded-xl hover:bg-black duration-300">Login</button>
      </form>
      <p>
        Don`t have an acount?{" "}
        <Link to="/register" className="text-sky-500">
          Sign up!
        </Link>
      </p>
    </div></div>
  );
}

export default LoginPage;
