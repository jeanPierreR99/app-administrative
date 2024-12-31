import { Binary, ChartCandlestick, FileChartColumn, FileDigit, FolderDot, Home, Scale, UserCog } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom";
import LOGO from "../assets/images/logo.png"

const groupedItems = [
  {
    label: "Inicio",
    url: "/",
    icon: Home
  },
  {
    label: "Roles y Usuarios",
    url: "/roles-users",
    icon: UserCog
  },
  {
    label: "Códigos",
    url: "/generator-code",
    icon: Binary
  },
  {
    label: "A. Administrativa",
    url: "/administrative",
    icon: FolderDot
  },
  {
    label: "A. Comercio",
    url: "/trading",
    icon: ChartCandlestick
  },
  {
    label: "A. Legal",
    url: "/lawful",
    icon: Scale
  },
  {
    label: "A. Contable",
    url: "/accountant",
    icon: FileDigit
  },
  {
    label: "Reporte",
    url: "/report",
    icon: FileChartColumn
  },
];

export const AppSidebar: React.FC<any> = () => {

  return (
    <Sidebar>
      <SidebarContent className="bg-gray-100">
        <SidebarGroup>
          <div className="h-[100px] w-full m-auto">
            <img className="h-full w-full object-contain " src={LOGO} alt="WiFi Icon" />
          </div>
          <SidebarGroupLabel className="flex justify-between">Panel Administrativo
          </SidebarGroupLabel>
          <SidebarGroupContent>
            {groupedItems.map((item, index) => (
              <SidebarMenuButton key={index} className="p-0">
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    `flex gap-2 w-full h-full p-1 px-2 ${isActive ? "font-bold" : ""
                    }`}
                >
                  {/* <item.icon className="w-5 h-5" /> */}
                  {item.label}
                </NavLink>
              </SidebarMenuButton>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
