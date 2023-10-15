import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import { checkLoginUsers } from '~/services/index'


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.id) {
      navigate('/home');
    }

    return () => {}
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setError("Vui lòng nhập đầy đủ thông tin");
      return alert("Vui long nhap day du thong tin");
    }

    const userAuth = await checkLoginUsers(username, password);
    console.log(userAuth);

    if (userAuth) {
      localStorage.setItem("user", JSON.stringify(userAuth));
      console.log(userAuth);
      console.log("Dang nhap thanh cong");

      setIsLoggedIn(true);

      navigate("/home")

    } else {
      alert('Dang nhap that bai')
      console.log("Dang nhap that bai");
    }

    // Xử lý logic đăng nhập ở đây, ví dụ kiểm tra và xác thực thông tin đăng nhập
    // console.log("Đăng nhập thành công!");
    
    // console.log(username, password);
  };
  
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <>
      <div className="login">
        <div className="flex justify-center items-center h-[500px]">
          <div className="w-full max-w-md">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <h1 className="text-center font-bold text-2xl">Login</h1>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <Link
                  to={"/register"}
                  className="ml-[20px] hover:underline text-blue-500"
                >
                  Do not have an account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
