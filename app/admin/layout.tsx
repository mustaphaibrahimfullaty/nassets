import { BellIcon, ShieldCheckIcon } from "lucide-react"

import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-3 border-b bg-background px-4">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="-ml-1" />
            <Badge variant="secondary" className="hidden gap-2 md:inline-flex">
              <ShieldCheckIcon aria-hidden="true" />
              Admin Console
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative" aria-label="Open admin notifications">
              <BellIcon data-icon="inline-start" />
              <span className="absolute right-2 top-2 size-2 rounded-full bg-primary" />
            </Button>
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-muted/20">
          <div className="container mx-auto flex max-w-7xl flex-col gap-6 p-4 md:p-6">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
