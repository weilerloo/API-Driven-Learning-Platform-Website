import { useState } from "react"
import { FiTrash2 } from "react-icons/fi"
import { useAppDispatch, useAppSelector } from "../../store"
import { useNavigate } from "react-router-dom"
import { deleteProfile } from "../../services/operations/SettingsAPI"

export default function DeleteAccount() {
  const [checked, setChecked] = useState(false)

  const { token } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleDelete = (e) => {
    e.preventDefault()
    if (!checked) return
    const result = dispatch(deleteProfile(token, navigate));
  };

  return (
    <form
      onSubmit={handleDelete}
      className="my-10 flex flex-row gap-x-5 rounded-md border border-pink-700 bg-pink-900 p-6 sm:px-12"
    >
      {/* Icon */}
      <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
        <FiTrash2 className="text-3xl text-pink-200" />
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-richblack-5">
          Delete Account
        </h2>

        <div className="mt-1 flex flex-col gap-3 text-pink-25 sm:w-3/5">
          <p>Would you like to delete your account?</p>
          <p>
            This account may contain paid courses. Deleting your account is{" "}
            <span className="font-semibold text-pink-200">permanent</span> and
            will remove all content associated with it.
          </p>
        </div>

        {/* Confirmation Checkbox */}
        <div className="mt-4 flex items-center gap-3">
          <input
            type="checkbox"
            id="delete-confirm"
            className="form-checkbox h-4 w-4 cursor-pointer rounded-full text-indigo-600"
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
          />

          <label
            htmlFor="delete-confirm"
            className={`w-fit italic cursor-pointer ${checked ? "text-pink-300" : "text-pink-500"
              }`}
          >
            I want to delete my account.
          </label>
        </div>

        {/* Delete Button */}
        <button
          type="submit"
          className={`mt-4 w-fit rounded-md px-4 py-2 text-sm font-medium text-white transition ${checked
            ? "bg-gradient-to-r from-red-500 to-red-700 hover:opacity-90"
            : "bg-gray-600 cursor-not-allowed"
            }`}
          disabled={!checked}
        >
          Delete Account
        </button>
      </div>
    </form>
  )
}
