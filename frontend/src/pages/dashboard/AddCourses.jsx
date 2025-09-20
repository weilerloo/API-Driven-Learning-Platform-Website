// src/pages/dashboard/AddCourse.jsx
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RenderSteps from "../../components/AddCourse/RenderSteps";
import { ACCOUNT_TYPE } from "../../utils/constants";

export default function AddCourse() {
  const { token, accountType } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // ✅ Protect this route so only instructors can access
  if (!token || accountType !== ACCOUNT_TYPE.INSTRUCTOR) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-lg mb-4">You are not authorized to add courses.</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create a New Course</h1>
      <RenderSteps />
    </div>
  );
}
