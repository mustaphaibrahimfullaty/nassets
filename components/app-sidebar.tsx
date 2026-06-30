"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  LayoutDashboardIcon,
  PackageIcon,
  HeartIcon,
  RssIcon,
  StarIcon,
  SettingsIcon,
  ZapIcon,
} from "lucide-react"
import Image from "next/image"

const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Orders",
      url: "/dashboard/orders",
      icon: PackageIcon,
    },
    {
      title: "Wishlist",
      url: "/dashboard/wishlist",
      icon: HeartIcon,
    },
    {
      title: "Feed",
      url: "/feed",
      icon: RssIcon,
    },
    {
      title: "Reviews",
      url: "/dashboard/reviews",
      icon: StarIcon,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: SettingsIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  // Process nav items to set isActive based on current route
  const navItems = data.navMain.map(item => ({
    ...item,
    isActive: pathname === item.url || (item.url !== "/dashboard" && pathname.startsWith(item.url)),
  }))

  return (
    <Sidebar collapsible="offcanvas" {...props} className="border-r border-border/50">
      <SidebarHeader className="pl-0! px-0!">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="bg-transparent! hover:bg-transparent! pl-0!">
              <Link href="/dashboard">
                <Image
                  src="/brand/nassets-full-logo.png"
                  alt="Nassets"
                  width={100}
                  height={100}
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
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
