import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { RxCross2 } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"

import {
  createSubSection,
  updateSubSection,
} from "../../../services/operations/courseDetailsAPI"
import { setCourse } from "../../../slices/courseSlice"
import IconBtn from "../../../assets/IconBtn"
import Upload from "../Upload"

export default function SubSectionModal({
  modalData,
  setModalData,
  add = false,
  view = false,
  edit = false,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm()

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { token } = useSelector((state) => state.auth)
  const { course } = useSelector((state) => state.course)

  useEffect(() => {
    if (view || edit) {
      setValue("lectureTitle", modalData.title)
      setValue("lectureDesc", modalData.description)
      setValue("lectureVideo", modalData.videoUrl)
    }
  }, [])

  const isFormUpdated = () => {
    const currentValues = getValues()
    return (
      currentValues.lectureTitle !== modalData.title ||
      currentValues.lectureDesc !== modalData.description ||
      currentValues.lectureVideo !== modalData.videoUrl
    )
  }

  const handleEditSubsection = async () => {
    const currentValues = getValues()
    const formData = new FormData()
    formData.append("sectionId", modalData.sectionId)
    formData.append("subSectionId", modalData._id)

    if (currentValues.lectureTitle !== modalData.title) {
      formData.append("title", currentValues.lectureTitle)
    }
    if (currentValues.lectureDesc !== modalData.description) {
      formData.append("description", currentValues.lectureDesc)
    }
    if (currentValues.lectureVideo !== modalData.videoUrl) {
      formData.append("video", currentValues.lectureVideo)
    }

    setLoading(true)
    const result = await updateSubSection(formData, token)
    if (result) {
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === modalData.sectionId ? result : section
      )
      const updatedCourse = { ...course, courseContent: updatedCourseContent }
      dispatch(setCourse(updatedCourse))
    }
    setModalData(null)
    setLoading(false)
  }

  const onSubmit = async (data) => {
    if (view) return
    if (edit) {
      if (!isFormUpdated()) {
        toast.error("No changes made to the form")
      } else {
        handleEditSubsection()
      }
      return
    }

    const formData = new FormData()
    formData.append("sectionId", modalData)
    formData.append("title", data.lectureTitle)
    formData.append("description", data.lectureDesc)
    formData.append("video", data.lectureVideo)

    setLoading(true)
    const result = await createSubSection(formData, token)
    if (result) {
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === modalData ? result : section
      )
      const updatedCourse = { ...course, courseContent: updatedCourseContent }
      dispatch(setCourse(updatedCourse))
    }
    setModalData(null)
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-[1000] flex h-screen w-screen items-center justify-center overflow-auto bg-black/50 backdrop-blur-sm">
      <div className="my-8 w-11/12 max-w-[700px] rounded-2xl border border-richblack-600 bg-richblack-800 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-2xl border-b border-richblack-600 bg-richblack-700 px-6 py-4">
          <h2 className="text-lg font-semibold text-richblack-5">
            {view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture
          </h2>
          <button
            onClick={() => (!loading ? setModalData(null) : {})}
            className="text-richblack-200 hover:text-pink-200"
          >
            <RxCross2 className="text-2xl" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 px-8 py-8"
        >
          {/* Video Upload */}
          <Upload
            name="lectureVideo"
            label="Lecture Video"
            register={register}
            setValue={setValue}
            errors={errors}
            video={true}
            viewData={view ? modalData.videoUrl : null}
            editData={edit ? modalData.videoUrl : null}
          />

          {/* Title */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="lectureTitle" className="text-sm text-richblack-5">
              Lecture Title {!view && <sup className="text-pink-200">*</sup>}
            </label>
            <input
              disabled={view || loading}
              id="lectureTitle"
              placeholder="Enter Lecture Title"
              {...register("lectureTitle", { required: true })}
              className="form-style w-full"
            />
            {errors.lectureTitle && (
              <span className="ml-2 text-xs text-pink-200">
                Lecture title is required
              </span>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="lectureDesc" className="text-sm text-richblack-5">
              Lecture Description{" "}
              {!view && <sup className="text-pink-200">*</sup>}
            </label>
            <textarea
              disabled={view || loading}
              id="lectureDesc"
              placeholder="Enter Lecture Description"
              {...register("lectureDesc", { required: true })}
              className="form-style min-h-[120px] w-full resize-none"
            />
            {errors.lectureDesc && (
              <span className="ml-2 text-xs text-pink-200">
                Lecture description is required
              </span>
            )}
          </div>

          {/* Footer */}
          {!view && (
            <div className="flex justify-end">
              <IconBtn
                disabled={loading}
                text={loading ? "Saving..." : edit ? "Save Changes" : "Save"}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
