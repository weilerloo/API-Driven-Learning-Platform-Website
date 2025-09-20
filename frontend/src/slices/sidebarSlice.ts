import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface SidebarState {
  openSideMenu: boolean
  screenSize: number | undefined
  courseViewSidebar: boolean
}

const initialState: SidebarState = {
  openSideMenu: false,
  screenSize: undefined,
  courseViewSidebar: false,
}

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setOpenSideMenu: (state, action: PayloadAction<boolean>) => {
      state.openSideMenu = action.payload
    },
    setScreenSize: (state, action: PayloadAction<number | undefined>) => {
      state.screenSize = action.payload
    },
    setCourseViewSidebar: (state, action: PayloadAction<boolean>) => {
      state.courseViewSidebar = action.payload
    },
  },
})

export const { setOpenSideMenu, setScreenSize, setCourseViewSidebar } =
  sidebarSlice.actions

export default sidebarSlice.reducer
