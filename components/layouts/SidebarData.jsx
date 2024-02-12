import { IoCarSportSharp } from "react-icons/io5";
import { MdFavoriteBorder, MdListAlt, MdSpaceDashboard } from "react-icons/md";
export const SidebarData = [

  {
    icon: <IoCarSportSharp size={25} />,
    key: "/cars",
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
