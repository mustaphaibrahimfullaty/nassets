"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3Icon,
  FileTextIcon,
  LayoutDashboardIcon,
  PackageIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const adminNav = [
  { title: "Analytics", url: "/admin", icon: LayoutDashboardIcon },
  { title: "Products", url: "/admin/products", icon: PackageIcon },
  { title: "Orders", url: "/admin/orders", icon: ShoppingBagIcon },
  { title: "Users", url: "/admin/users", icon: UsersIcon },
  { title: "Reports", url: "/admin/reports", icon: BarChart3Icon },
  { title: "CMS", url: "/admin/cms", icon: FileTextIcon },
]

const adminUser = {
  name: "Nassets Admin",
  email: "admin@nassets.com",
  avatar: "/avatars/admin.jpg",
}

export function AdminSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const navItems = adminNav.map((item) => ({
    ...item,
    isActive: pathname === item.url || (item.url !== "/admin" && pathname.startsWith(item.url)),
  }))

  return (
    <Sidebar collapsible="offcanvas" className="border-r border-border/50" {...props}>
      <SidebarHeader className="px-0! pl-0!">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="bg-transparent! pl-0! hover:bg-transparent!">
              <Link href="/admin">
                <Image
                  src="/brand/nassets-full-logo.png"
                  alt="Nassets admin"
                  width={200}
                  height={150}
                  className="dark:grayscale dark:invert"
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={adminUser} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
