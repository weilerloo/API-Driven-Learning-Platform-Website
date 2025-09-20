import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { setCompletedLectures } from "../../slices/viewCourseSlice"

export default function LectureViewer() {
  const { courseId, sectionId, subSectionId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const { courseEntireData, completedLectures } = useSelector(
    (state) => state.viewCourse
  )

  // find current section + subSection
  const section = courseEntireData?.courseContent?.find(
    (sec) => sec._id === sectionId
  )
  const subSectionIndex = section?.subSection?.findIndex(
    (sub) => sub._id === subSectionId
  )
  const subSection = section?.subSection?.[subSectionIndex]

  // mark as completed once video ends
  const handleVideoEnd = () => {
    if (!completedLectures.includes(subSectionId)) {
      dispatch(setCompletedLectures([...completedLectures, subSectionId]))
    }
  }

  // navigation helpers
  const goToNext = () => {
    if (section?.subSection[subSectionIndex + 1]) {
      // next subsection in same section
      navigate(
        `/dashboard/courses/${courseId}/section/${section._id}/sub-section/${section.subSection[subSectionIndex + 1]._id}`
      )
    } else {
      // go to first subsection of next section
      const sectionIndex = courseEntireData?.courseContent?.findIndex(
        (sec) => sec._id === sectionId
      )
      const nextSection = courseEntireData?.courseContent?.[sectionIndex + 1]
      if (nextSection && nextSection.subSection.length > 0) {
        navigate(
          `/dashboard/courses/${courseId}/section/${nextSection._id}/sub-section/${nextSection.subSection[0]._id}`
        )
      }
    }
  }

  const goToPrev = () => {
    if (section?.subSection[subSectionIndex - 1]) {
      // previous subsection in same section
      navigate(
        `/dashboard/courses/${courseId}/section/${section._id}/sub-section/${section.subSection[subSectionIndex - 1]._id}`
      )
    } else {
      // go to last subsection of previous section
      const sectionIndex = courseEntireData?.courseContent?.findIndex(
        (sec) => sec._id === sectionId
      )
      const prevSection = courseEntireData?.courseContent?.[sectionIndex - 1]
      if (prevSection && prevSection.subSection.length > 0) {
        const lastSub =
          prevSection.subSection[prevSection.subSection.length - 1]
        navigate(
          `/view-course/${courseId}/section/${prevSection._id}/sub-section/${lastSub._id}`
        )
      }
    }
  }

  if (!subSection) {
    return (
      <div className="flex h-full items-center justify-center text-gray-300">
        Lecture not found
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="mb-2 text-2xl font-semibold text-richblack-5">
        {subSection.title}
      </h1>
      <p className="mb-4 text-sm text-richblack-200">
        {subSection.description}
      </p>

      {/* Video Player */}
      <div className="mb-6 aspect-video w-full overflow-hidden rounded-lg bg-black">
        <video
          src={subSection.videoUrl}
          controls
          className="h-full w-full"
          onEnded={handleVideoEnd}
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={goToPrev}
          disabled={!section || subSectionIndex === 0}
          className="rounded-lg bg-richblack-700 px-4 py-2 text-richblack-200 hover:bg-richblack-600"
        >
          Previous
        </button>
        <button
          onClick={goToNext}
          className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-black hover:bg-yellow-300"
        >
          Next
        </button>
      </div>
    </div>
  )
}
