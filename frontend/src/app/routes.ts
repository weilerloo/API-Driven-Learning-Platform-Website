import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Public routes
  index("routes/home.tsx"),
  route("about", "../pages/About.jsx"),
  route("catalog", "../pages/Catalog.jsx"),
  route("guestcourses", "../pages/GuestCourses.jsx"),
  route("tutors", "../pages/Tutors.jsx"),
  route("contact", "../pages/Contact.jsx"),
  route("login", "../components/auth/login/Login.jsx"),
  route("register", "../components/auth/register/Register.jsx"),

  // Protected dashboard layout
  route("dashboard", "DashboardLayout.tsx", [
    index("routes/DashboardHome.tsx"),
    route("courses", "../pages/dashboard/Courses.jsx"),
    route("courses/:courseId", "../pages/dashboard/ViewCourse.jsx", [
      route(
        "section/:sectionId/sub-section/:subSectionId",
        "../pages/dashboard/LectureViewer.jsx"
      ),
    ]),
    route("add-course", "../pages/dashboard/AddCourses.jsx"),
    route("edit-course/:courseId", "../pages/dashboard/EditCourse.jsx"),
    route("profile", "../pages/dashboard/Profile.jsx"),
    route("update-password", "../pages/dashboard/UpdatePassword.jsx"),
    route("delete-account", "../pages/dashboard/DeleteAccount.jsx"),
    route("wallet", "../pages/dashboard/Wallet.jsx"), 
  ]),

  // Catch-all (404)
  route("*", "../components/auth/error/Error.tsx"),
] satisfies RouteConfig;
