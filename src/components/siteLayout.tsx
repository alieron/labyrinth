import { Outlet } from "react-router-dom";
import SiteHeader from "./siteHeader";
import SiteFooter from "./siteFooter";

export default function SiteLayout() {
  return (
    <div className="container flex flex-col max-w-7xl mx-auto min-h-screen">
      <SiteHeader />
      <Outlet/>
      <SiteFooter/>
    </div>
  );
}