
import { Link } from "react-router";
import ErrorImg from "/src/assets/images/backgrounds/errorimg.svg";
import { Button } from "flowbite-react";
const Error = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center dark:bg-gray-850 w-screen h-screen">
        <div className="text-center flex flex-col items-center justify-center">
          <img src={ErrorImg} alt="error" className="mb-4" />
          <h1 className="text-ld text-4xl mb-6 text-white-900">Opps!!!</h1>
          <h6 className="text-xl text-ld text-white-900 my-5">
            This page you are looking for could not be found.
          </h6>
          <Button
            color={"primary"}
            as={Link}
            to="/"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg py-2.5 transition hover:opacity-90"
          >
            Go Back to Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default Error;
