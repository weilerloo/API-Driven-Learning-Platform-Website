import { RxCross2 } from "react-icons/rx"

export default function CourseReviewModal({ setReviewModal }) {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
          <p className="text-xl font-semibold text-richblack-5">Course Modal</p>
          <button onClick={() => setReviewModal(false)}>
            <RxCross2 className="text-2xl text-richblack-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 text-center text-richblack-5">
          <p>This is a placeholder modal.  
          The review & rating system has been removed.</p>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-x-2 p-6">
          <button
            onClick={() => setReviewModal(false)}
            className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold
                       text-richblack-900 hover:bg-richblack-900 hover:text-richblack-300 duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
