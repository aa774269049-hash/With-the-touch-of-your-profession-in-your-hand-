"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Bell, Briefcase, Menu, Sparkles } from "lucide-react"

export default function Header() {
  const navLinks = [
    { href: "/search", label: "البحث عن وظيفة" },
    { href: "/smart-search", label: "البحث الذكي" },
    { href: "/employer/dashboard", label: "لأصحاب العمل" },
    { href: "/forum", label: "المنتدى" },
  ]

  return (
    <header className="bg-card shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline">محفظتك بلمسة</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/login">تسجيل الدخول</Link>
          </Button>
          <Button asChild>
            <Link href="/register">حساب جديد</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="p-6">
                <Link href="/" className="flex items-center gap-2 mb-8">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <span className="text-xl font-bold font-headline">محفظتك بلمسة</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="border-t mt-6 pt-6 flex flex-col gap-2">
                    <Button variant="ghost" asChild>
                        <Link href="/login">تسجيل الدخول</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/register">حساب جديد</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
