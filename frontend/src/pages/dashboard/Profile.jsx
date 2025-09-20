import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { useAppSelector } from "../../store";

export default function Profile() {
  const navigate = useNavigate();
  const { fullName, email, accountType, createdAt, updatedAt } = useAppSelector(
    (state) => state.auth
  );

  return (
 <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="bg-white shadow-md rounded-lg p-6 text-gray-800">
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-semibold w-1/3">Full Name:</td>
              <td className="py-2">{fullName}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-semibold">Email:</td>
              <td className="py-2">{email}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-semibold">Account Type:</td>
              <td className="py-2">{accountType}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-semibold">Created At:</td>
              <td className="py-2">
                {createdAt ? new Date(createdAt).toLocaleString() : "-"}
              </td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Last Updated:</td>
              <td className="py-2">
                {updatedAt ? new Date(updatedAt).toLocaleString() : "-"}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex gap-4 mt-6">
          <Button
            onClick={() => navigate("/dashboard/update-password")}
            className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg py-2.5 transition hover:opacity-90"
          >
            Change Password
          </Button>
          <Button
            color="failure"
            onClick={() => navigate("/dashboard/delete-account")}
            className="flex-1 bg-gradient-to-r from-red-500 to-red-700 text-white font-medium rounded-lg py-2.5 transition hover:opacity-90"
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
}
