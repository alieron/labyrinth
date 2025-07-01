import { Outlet } from "react-router-dom";
import SiteHeader from "./siteHeader";

export default function SiteLayout() {
  return (
    <div className="container flex flex-col max-w-320 mx-auto">
      <SiteHeader />
      <Outlet/>
    </div>
  );
}