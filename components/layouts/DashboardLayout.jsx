import DashboardNav from "./DashboardNav";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="drawer md:drawer-open mx-auto max-w-[1640px]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#FAFAFA]">
        <DashboardNav />
        {children}
      </div>
      <Sidebar />
    </div>
  );
};

export default DashboardLayout;
