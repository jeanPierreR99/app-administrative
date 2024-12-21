import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Outlet } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"

export default function AppLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="px-2 py-6 md:px-4 pt-0 w-full">
                <SidebarTrigger className="mb-2" />
                <Toaster></Toaster>
                <Outlet />
            </main>
        </SidebarProvider>
    )
}
