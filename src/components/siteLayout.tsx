import { Outlet } from "react-router-dom";
import SiteHeader from "./siteHeader";

export default function SiteLayout() {
  return (
    <div className="container flex flex-col max-w-300 mx-auto">
      <SiteHeader />
      <div className="flex flex-1 overflow-hidden gap-2 my-0 text-base">
        {/* Left Sidebar */}
        <div className="sticky top-20 h-fit w-64 self-start">
          <p>test</p>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>

        {/* Right Sidebar - File Properties */}
        <div className="sticky top-20 h-fit w-64 self-start">
          <p>test</p>
        </div>
      </div>
    </div>
  );
}