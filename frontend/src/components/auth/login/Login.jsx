import FullLogo from "../../FullLogo";
import AuthLogin from "../authforms/AuthLogin";
import { Link } from "react-router-dom";

const gradientStyle = {
  background:
    "linear-gradient(135deg, rgba(238,119,82,0.25), rgba(231,60,126,0.25), rgba(35,166,213,0.25), rgba(35,213,171,0.25))",
  backgroundSize: "400% 400%",
  animation: "gradient 15s ease infinite",
  height: "100vh",
};

function Login(){
  return (
    <div style={gradientStyle} className="relative overflow-hidden h-screen w-full">
      <div className="flex h-full justify-center items-center px-4">
        <div className="rounded-2xl shadow-lg bg-white dark:bg-darkgray p-8 w-full md:w-96 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center gap-4">

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800">
              Welcome Back 👋
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sign in to continue to <span className="font-medium">Elice</span>
            </p>

            {/* Auth Form */}
            <div className="w-full mt-4">
              <AuthLogin />
            </div>

            {/* Divider */}
            {/* <div className="flex items-center w-full my-4">
              <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
              <span className="mx-2 text-xs text-gray-400">OR</span>
              <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            </div> */}

            {/* Extra Actions (social / links) */}
            {/* <div className="w-full">
              <button className="w-full rounded-lg py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition">
                Continue with Google
              </button>
            </div> */}

            {/* Register Link */}
            <div className="flex gap-1 text-sm font-medium mt-4 text-gray-600 dark:text-gray-300">
              <p>New to Elice?</p>
              <Link
                to="/register"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
