import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  return (
    <div className="flex justify-center">
    <div className="flex flex-col w-96">
      <h1 className="text-4xl my-2">Register</h1>
      {RegisterErrors.map((error, i) => (
        <div key={i} className="bg-red-500 text-white">
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Username"
          className="bg-zinc-700 w-full my-1 p-1 text-xl rounded-lg"
        />
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="bg-zinc-700 w-full my-1 p-1 text-xl rounded-lg"
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
        <button type="submit"  className="w-full bg-sky-600 my-2 p-2 rounded-xl hover:bg-black duration-300" >Register</button>
      </form>
      <p>
        Have an acount?{" "}
        <Link to="/login" className="text-sky-500" >
          Sign in!
        </Link>
      </p>
    </div></div>
  );
}

export default RegisterPage;
