import { IoCarSportSharp } from "react-icons/io5";
import { MdFavoriteBorder, MdListAlt, MdSpaceDashboard } from "react-icons/md";
export const SidebarData = [
  {
    icon: <MdSpaceDashboard size={25} />,
    key: "/dashboard",
    label: "Dashboard",
  },
  {
    icon: <IoCarSportSharp size={25} />,
    key: "/car",
    label: "Cars",
  },

  {
    icon: <MdListAlt size={25} />,
    key: "/bookings",
    label: "Bookings",
  },

  {
    icon: <MdFavoriteBorder size={25} />,
    key: "/trips",
    label: "Trips",
  },
];
