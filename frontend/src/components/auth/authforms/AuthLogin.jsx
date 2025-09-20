import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../services/operations/authAPI"

const AuthLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate))
  }

  return (
    <form onSubmit={handleOnSubmit} className="space-y-5">
      {/* Username */}
      <div>
        <Label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
          Email
        </Label>
        <TextInput
          id="Username"
          name="email"
          type="text"
          required
          value={email}
          onChange={handleOnChange}
          placeholder="Enter your username"
          className="rounded-lg focus:ring-2 focus:ring-indigo-500"
          style={{ height: "4vh", paddingLeft: "1rem" }}
        />
      </div>

      {/* Password */}
      <div>
        <Label htmlFor="userpwd" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-900">
          Password
        </Label>
        <TextInput
          id="userpwd"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleOnChange}
          placeholder="••••••••"
          className="rounded-lg focus:ring-2 focus:ring-indigo-500"
          style={{ height: "4vh", paddingLeft: "1rem" }}
        />
      </div>

      {/* Remember & Forgot Password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm text-gray-700 dark:text-gray-900">
            Remember this device
          </Label>
        </div>
        <Link to="/" className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">
          Forgot Password?
        </Link>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg py-2.5 transition hover:opacity-90"
      >
        Sign in
      </Button>
    </form>
  );
};

export default AuthLogin;
