import { Text, ChevronDown } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import LOGO from "../assets/images/logo.png"

const groupedItems = [
  {
    label: "Roles y usuarios",
    items: [
      { title: "Usuarios", url: "/roles-users", icon: Text },
      { title: "Asignación de area", url: "/roles-users", icon: Text },
    ],
  },
  {
    label: "Generador de códigos",
    items: [
      { title: "Código BBVA", url: "/generator-code/BBVA", icon: Text },
      { title: "Código IRBSA", url: "/generator-code/IRBSA", icon: Text },
    ],
  },
  {
    label: "A. Administrativa",
    items: [
      { title: "Formulario", url: "/administrative", icon: Text },
      { title: "Registros", url: "/administrative", icon: Text },
    ],
  },
  {
    label: "A. Comercio",
    items: [
      { title: "Formulario", url: "/trading", icon: Text },
      { title: "Registros", url: "/trading", icon: Text },
    ],
  },
  {
    label: "A. Legal",
    items: [
      { title: "Formulario", url: "/lawful", icon: Text },
      { title: "Registros", url: "/lawful", icon: Text },
    ],
  },
  {
    label: "A. Contable",
    items: [
      { title: "Formulario", url: "/accountant", icon: Text },
      { title: "Registros", url: "/accountant", icon: Text },
    ],
  },
  {
    label: "Reporte",
    items: [
      { title: "Generar", url: "/report", icon: Text },
      { title: "Gráfica", url: "/report", icon: Text },
    ],
  },
];

export const AppSidebar: React.FC<any> = () => {

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="h-[100px] w-full m-auto">
            <img className="h-full w-full object-contain " src={LOGO} alt="WiFi Icon" />
          </div>
          <SidebarGroupLabel className="flex justify-between">Panel Administrativo
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuButton className="p-0">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `flex gap-2 w-full h-full p-1 px-2 ${isActive ? "font-bold" : ""
                  }`}
              >
                Inicio
              </NavLink>
            </SidebarMenuButton>
            {groupedItems.map((item, index) => (
              <SidebarMenu key={index}>
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="flex justify-between items-center">
                        {item.label}
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />

                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((data, index) => (
                          <SidebarMenuSubItem key={index}>
                            <SidebarMenuButton className="p-0">
                              <NavLink
                                to={data.url}
                                className={({ isActive }) =>
                                  `flex gap-2 w-full h-full p-1 px-3 ${isActive ? "font-bold" : ""
                                  }`}
                              >
                                <data.icon className="w-5 h-5" />
                                {data.title}
                              </NavLink>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
