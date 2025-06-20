import { Outlet } from "react-router-dom";
import SiteHeader from "./siteHeader";


export default function SiteLayout() {
  return (
    <div className="container flex flex-col max-w-300 mx-auto">
      <SiteHeader />
      <div className="flex flex-1 overflow-hidden gap-4 py-6 px-4">
        {/* Left Sidebar */}
        <div className="w-64 overflow-y-auto">

        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>

        {/* Right Sidebar - File Properties */}
        <div className="w-64 overflow-y-auto">

        </div>
      </div>
    </div>
  );
}