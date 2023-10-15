import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.id) {
      navigate('/home');
    }
  }, []);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");

    // Tạo đối tượng chứa thông tin đăng kí
    const registrationData = {
      username,
      password,
    };


    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("Yeu cau nhap du thong tin");
      alert("Yeu cau nhap day du thong tin");
      return;
    } else if (password !== confirmPassword) {
      setError("Mat khau khong khop");
      alert("Mat khau khong khop");
      return;
    } else {
      // Gửi yêu cầu POST đến Mock API để đăng kí
      axios
        .post(
          "https://652405ebea560a22a4e945b0.mockapi.io/user/users",
          registrationData
        )
        .then((response) => {
          // Xử lý phản hồi thành công
          alert('Dang ki thanh cong')
          console.log(response.data);
          navigate("/login")
        })
        .catch((error) => {
          // Xử lý lỗi
          alert('Dang ki khong thanh cong')
          console.error(error);
        });
      }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-center font-bold text-2xl">Register</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              value={username}
              onChange={handleUsername}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="username"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={handlePassword}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={handleConfirmPassword}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleRegister}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
