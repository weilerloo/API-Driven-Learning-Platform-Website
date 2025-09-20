import "./app.css";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { Provider } from "react-redux";
import { store } from "../store";
import { Toaster } from "react-hot-toast";

export default function App() {
  const location = useLocation();

  // hide nav/footer for dashboard routes
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <div className="flex flex-col min-h-screen">
            {!isDashboard && <NavBar />}

            <main className="flex-grow flex justify-center items-start">
              <Outlet />
            </main>

            {!isDashboard && <Footer />}

            <Toaster />
          </div>
        </Provider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
