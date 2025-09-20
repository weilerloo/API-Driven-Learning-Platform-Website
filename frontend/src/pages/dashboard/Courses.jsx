import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllCourses } from "../../services/operations/courseDetailsAPI";
import { ACCOUNT_TYPE } from "../../utils/constants";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  // 👇 read role and user from Redux
  const { accountType, email } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      const res = await getAllCourses();
      console.log("getAllCourses result:", res);

      if (res?.success && Array.isArray(res.data)) {
        setCourses(res.data);
      } else if (res?.success && Array.isArray(res.data?.courses)) {
        setCourses(res.data.courses);
      } else if (Array.isArray(res)) {
        setCourses(res);
      } else {
        setCourses([]);
      }
    })();
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">All Courses</h1>

        {accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <button
            onClick={() => navigate("/dashboard/add-course")}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            ➕ Add Course
          </button>
        )}
      </div>

      {courses.length === 0 ? (
        <p className="text-gray-400">No courses available yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const isOwner =
              accountType === ACCOUNT_TYPE.INSTRUCTOR &&
              (course.instructor.email === email);

            return (
              <div
                key={course._id}
                className="p-4 border rounded-lg bg-white shadow hover:shadow-lg"
              >
                <img
                  src={course.thumbnail}
                  alt={course.courseName}
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="mt-3 font-semibold text-lg text-gray-800">
                  {course.courseName}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {course.courseDescription.slice(0, 80)}...
                </p>
                <p className="text-yellow-600 font-bold mt-3">${course.price}</p>
                <p className="text-xs text-gray-400 mt-1">
                  By {course.instructor.fullName || course.instructor.email}
                </p>

                {/* 👇 Only course owner can edit */}
                {isOwner && (
                  <button
                    onClick={() => navigate(`/dashboard/edit-course/${course._id}`)}
                    className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded"
                  >
                    ✏️ Edit Course
                  </button>
                )}

                {accountType === ACCOUNT_TYPE.STUDENT && (
                  <button
                    onClick={() => navigate(`/dashboard/courses/${course._id}`)}
                    className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
                  >
                    🎓 Enroll
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
