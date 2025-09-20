import { Outlet, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ACCOUNT_TYPE } from "../utils/constants";

export default function DashboardLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // read from redux
  const { token, fullName, email, accountType } = useSelector(
    (state: any) => state.auth
  );

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Protect the layout
  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white w-full flex-col">
        <p className="text-lg font-semibold">
          Please login to access the dashboard.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 text-blue-400 underline"
        >
          Go to Login
        </button>
      </div>
    );
  }

  // Sidebar links differ by role
  const sidebarLinks =
    accountType === ACCOUNT_TYPE.INSTRUCTOR
      ? [
          { to: "/dashboard/courses", label: "📚 All Courses" },
          { to: "/dashboard/profile", label: "👤 Profile" },
        ]
      : [
          { to: "/dashboard/courses", label: "📘 Enrolled Courses" },
          { to: "/dashboard/profile", label: "👤 Profile" },
          { to: "/dashboard/wallet", label: "💰 Wallet" }, // ✅ added here
          { to: "/dashboard/update-password", label: "🔑 Update Password" },
        ];

  return (
    <div className="min-h-screen bg-gray-900 text-white w-full">
      {/* MOBILE TOPBAR (only visible under lg) */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-gray-800">
        <div className="text-lg font-bold">My Elice Dashboard</div>
        <button
          aria-label="Open sidebar"
          onClick={() => setSidebarOpen(true)}
          className="p-1 rounded hover:bg-gray-700 transition"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* layout container: on lg it becomes two columns */}
      <div className="lg:flex">
        {/* OVERLAY (mobile only) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* SIDEBAR */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 p-6 overflow-y-auto
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:static lg:inset-auto h-screen
          `}
        >
          {/* close button (mobile) */}
          <div className="lg:hidden flex justify-end mb-4">
            <button
              aria-label="Close sidebar"
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded hover:bg-gray-700 transition"
            >
              <X size={24} />
            </button>
          </div>

          {/* brand/title */}
          <h2 className="text-xl font-bold mb-6 hidden lg:block">
            My Elice Dashboard
          </h2>

          {/* user info */}
          <div className="mb-6 space-y-1">
            <p className="font-semibold truncate">{fullName || "User"}</p>
            <p className="text-sm text-gray-400 truncate">{email || "—"}</p>
            <p className="text-xs text-gray-500 capitalize">
              {accountType || "user"}
            </p>
          </div>

          {/* nav */}
          <nav className="flex flex-col gap-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setSidebarOpen(false)}
                className="block px-3 py-2 rounded hover:bg-gray-700 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => {
                setSidebarOpen(false);
                handleLogout();
              }}
              className="text-left text-red-400 hover:bg-red-700 hover:text-white rounded px-3 py-2 transition"
            >
              🚪 Logout
            </button>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-8 lg:ml-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
