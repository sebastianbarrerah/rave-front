import { Bug, Calendar, ChartAreaIcon, ChartColumn, Database, Grape, HandCoins, Home, Inbox, Search, Settings, ShoppingCart } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Inicio",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Estadisticas",
    url: "dashboard/estadisticas",
    icon: ChartColumn,
  },
  {
    title: "Tienda",
    url: "dashboard/tienda",
    icon: ShoppingCart,
  },
  {
    title: "Deben",
    url: "dashboard/clientes",
    icon: HandCoins,
  },
  {
    title: "Inventario",
    url: "dashboard/inventario",
    icon: Database,
  },
  {
    title: "Reportes",
    url: "dashboard/reportes",
    icon: Bug,
  },
]

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menú</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="mb-2">
                    <a href={item.url} className="gap-3">
                      <item.icon />
                      <span className="text-[19px] gap-5">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
