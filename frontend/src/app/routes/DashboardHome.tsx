import type { Route } from "./+types/home";
import DashboardWelcome from "../welcome/DashboardWelcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to Elice Dashboard!" },
  ];
}

export default function DashboardHome() {
  return <DashboardWelcome />;
}
