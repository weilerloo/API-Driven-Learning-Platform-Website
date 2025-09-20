import "./app.css";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function FullLayout() {
  return (
    <div className="flex flex-col">
      <NavBar />

      <main className="flex justify-center items-start">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
