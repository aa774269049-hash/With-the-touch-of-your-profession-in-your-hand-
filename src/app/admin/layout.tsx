"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Users,
  Briefcase,
  BarChart,
  LogOut,
  Shield,
} from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const menuItems = [
    { href: "/admin", label: "نظرة عامة", icon: LayoutDashboard },
    { href: "/admin/users", label: "إدارة المستخدمين", icon: Users },
    { href: "/admin/jobs", label: "إدارة الوظائف", icon: Briefcase },
    { href: "/admin/stats", label: "الإحصائيات", icon: BarChart },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-muted/40">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold font-headline">لوحة تحكم المشرف</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith(item.href)}
                    tooltip={item.label}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="تسجيل الخروج">
                  <LogOut className="h-4 w-4" />
                  <span>تسجيل الخروج</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="flex-1">
          <header className="flex items-center justify-between p-4 border-b">
             <h1 className="text-2xl font-bold">
              {menuItems.find((item) => item.href === pathname)?.label || "نظرة عامة"}
            </h1>
            <SidebarTrigger className="md:hidden"/>
          </header>
          <main className="p-4 md:p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
