import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

// Define types for your state
interface CourseSection {
  _id: string
  sectionName: string
  subSection: any[] // Replace `any` with your actual SubSection type
}

interface CourseData {
  _id: string
  courseName: string
  courseDescription: string
  thumbnail: string
  price: number
  courseContent: CourseSection[]
  // Add more fields as per your backend schema
}

interface ViewCourseState {
  courseSectionData: CourseSection[]
  courseEntireData: CourseData | null
  completedLectures: string[] // assuming IDs of completed lectures
  totalNoOfLectures: number
}

const initialState: ViewCourseState = {
  courseSectionData: [],
  courseEntireData: null,
  completedLectures: [],
  totalNoOfLectures: 0,
}

const viewCourseSlice = createSlice({
  name: "viewCourse",
  initialState,
  reducers: {
    setCourseSectionData: (state, action: PayloadAction<CourseSection[]>) => {
      state.courseSectionData = action.payload
    },
    setEntireCourseData: (state, action: PayloadAction<CourseData | null>) => {
      state.courseEntireData = action.payload
    },
    setTotalNoOfLectures: (state, action: PayloadAction<number>) => {
      state.totalNoOfLectures = action.payload
    },
    setCompletedLectures: (state, action: PayloadAction<string[]>) => {
      state.completedLectures = action.payload
    },
    updateCompletedLectures: (state, action: PayloadAction<string>) => {
      state.completedLectures = [...state.completedLectures, action.payload]
    },
  },
})

export const {
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
  setCompletedLectures,
  updateCompletedLectures,
} = viewCourseSlice.actions

export default viewCourseSlice.reducer
