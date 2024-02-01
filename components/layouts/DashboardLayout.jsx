import DashboardNav from "./DashboardNav";
import SideBar from "./SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="drawer md:drawer-open mx-auto max-w-[1640px]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#FAFAFA]">
        <DashboardNav />
        {children}
      </div>
      <SideBar />
    </div>
  );
};

export default DashboardLayout;
