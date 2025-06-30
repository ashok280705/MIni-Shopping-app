import { useContext, React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Usercontext from "../context/context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { Username, setUsername } = useContext(Usercontext);
  const [isRegister, setisRegister] = useState(true); // true = Register, false = Login
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (isRegister) {
        // Check if user already exists
        const userExists = existingUsers.some(user => user.username === data.username);
        if (userExists) {
            alert("Username already exists!");
            return;
        }

        // Add new user
        const newUser = {
            username: data.username,
            password: data.password
        };
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        setUsername(data.username);
        navigate('/app');
    } else {
        // Login Mode
        const matchedUser = existingUsers.find(
            (user) =>
                user.username === data.username &&
                user.password === data.password
        );

        if (matchedUser) {
            setUsername(data.username);
            alert("login sucsseful");
            navigate('/app');
        } else {
            alert("Invalid username or password");
        }
    }
};

  // ✅ useEffect at the top level
  useEffect(() => {
    alert(`You have switched to ${isRegister ? 'Register' : 'Login'}`);
  }, [isRegister]);

  return (
    <>
      {isSubmitting && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
            <h1 className="text-amber-900 font-semibold">Loading...</h1>
          </div>
        </div>
      )}

      <div className="container mx-auto w-full h-screen flex justify-center items-center bg-gradient-to-br from-amber-300 via-orange-400 to-red-600">
        <div className="loginContainer w-[45%] h-[75%] bg-gradient-to-br from-amber-50 via-orange-300 to-red-400 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 p-9 px-15">
          <div className="1 h-[15%] flex justify-center items-center">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-amber-900 via-orange-600 to-red-500 bg-clip-text text-transparent animate-bounce">
              {isRegister ? 'Register' : 'Login'} to Mini Shopping App
            </h1>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-amber-300 via-orange-400 to-red-600 my-4"></div>

          {/* ✅ Fixed radio buttons */}
          <div className="flex justify-around mb-6">
            <label className="flex items-center gap-2 text-amber-900 font-medium">
              <input
                type="radio"
                name="mode"
                value="login"
                checked={!isRegister}
                onChange={() => setisRegister(false)}
                className="accent-amber-600 w-5 h-5 cursor-pointer"
              />
              Login
            </label>
            <label className="flex items-center gap-2 text-amber-900 font-medium">
              <input
                type="radio"
                name="mode"
                value="register"
                checked={isRegister}
                onChange={() => setisRegister(true)}
                className="accent-amber-600 w-5 h-5 cursor-pointer"
              />
              Register
            </label>
          </div>

          <div className="2">
            <form className="flex flex-col gap-4 p-8" onSubmit={handleSubmit(onSubmit)}>
              {/* Username Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="text-lg font-semibold text-amber-900">
                  Username
                </label>
                <input
                  {...register("username", { required: "Username is required" })}
                  type="text"
                  id="username"
                  className="p-2 rounded-md border-2 border-amber-300 focus:border-amber-500 focus:outline-none"
                  placeholder="Enter your username"
                />
                {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-lg font-semibold text-amber-900">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Password must be at least 8 characters" },
                  })}
                  type="password"
                  id="password"
                  className="p-2 rounded-md border-2 border-amber-300 focus:border-amber-500 focus:outline-none"
                  placeholder="Enter your password"
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
              </div>

              {/* Submit Button */}
              <button
              onclick={onSubmit}
                type="submit"
                disabled={isSubmitting}
                className="mt-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-2 px-4 rounded-md hover:from-amber-700 hover:to-orange-700 transition-all duration-300 h-[7vh]"
              >
                {isRegister ? 'Register' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;