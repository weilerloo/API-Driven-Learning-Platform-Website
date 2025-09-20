import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast"
import { ACCOUNT_TYPE } from "../../../utils/constants.js";
import { setSignupData } from "../../../slices/authSlice.js";
import { signUp } from "../../../services/operations/authAPI"

const AuthRegister = () => {
const navigate = useNavigate();
const dispatch = useDispatch();

// student or instructor
const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);

const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { fullname, email, password, confirmPassword } = formData;
  // Handle input fields, when some value changes
  
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

    // console.log('signup form data - ', formData);
  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return;
    }
    const signupData = {
      ...formData,
      accountType,
    };

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData));
    dispatch(signUp(accountType, fullname, email, password, confirmPassword, navigate));
    // Reset form data
    setFormData({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.STUDENT);
  };
  return (
    <form onSubmit={handleOnSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <Label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          Full Name
        </Label>
        <TextInput
          id="name"
          name="fullname"
          value={fullname}
          type="text"
          onChange={handleOnChange}
          required
          placeholder="Enter your full name"
          className="rounded-lg focus:ring-2 focus:ring-indigo-500"
          style={{ height: "4vh", paddingLeft: "1rem" }}
        />
      </div>

      {/* Email */}
      <div>
        <Label
          htmlFor="emadd"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          Email Address
        </Label>
        <TextInput
          id="emadd"
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          required
          placeholder="you@example.com"
          className="rounded-lg focus:ring-2 focus:ring-indigo-500"
          style={{ height: "4vh", paddingLeft: "1rem" }}
        />
      </div>

      {/* Password */}
      <div>
        <Label
          htmlFor="userpwd"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          Password
        </Label>
        <TextInput
          id="userpwd"
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          required
          placeholder="••••••••"
          className="rounded-lg focus:ring-2 focus:ring-indigo-500"
          style={{ height: "4vh", paddingLeft: "1rem" }}
        />
      </div>

      {/* Confirm Password */}
      <div>
        <Label
          htmlFor="confirmuserpwd"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          Confirm Password
        </Label>
        <TextInput
          id="userpwd"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
          required
          placeholder="••••••••"
          className="rounded-lg focus:ring-2 focus:ring-indigo-500"
          style={{ height: "4vh", paddingLeft: "1rem" }}
        />
      </div>

      {/* Role Selection */}
      <div className="flex gap-6 items-center">
        <label className="flex items-center gap-2 cursor-pointer text-black dark:text-gray-900">
          <input
            type="radio"
            name="accountType"
            value={ACCOUNT_TYPE.STUDENT}
            checked={accountType === ACCOUNT_TYPE.STUDENT}
            onChange={() => setAccountType(ACCOUNT_TYPE.STUDENT)}
          />
          Student
        </label>
        <label className="flex items-center gap-2 cursor-pointer text-black dark:text-gray-900">
          <input
            type="radio"
            name="accountType"
            value={ACCOUNT_TYPE.INSTRUCTOR}
            checked={accountType === ACCOUNT_TYPE.INSTRUCTOR}
            onChange={() => setAccountType(ACCOUNT_TYPE.INSTRUCTOR)}
          />
          Instructor
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg py-2.5 transition hover:opacity-90"
      >
        Sign Up
      </Button>

      {/* Already have an account */}
      <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-3">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default AuthRegister;
