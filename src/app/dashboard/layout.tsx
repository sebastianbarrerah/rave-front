import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/dashboard/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
        <SidebarTrigger />
      <main className="flex flex-col w-full h-24 p-11">
        {children} 
      </main>
    </SidebarProvider>

  )
}
