import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileText, Bookmark, User, Bell, ArrowLeft } from "lucide-react"

export default function DashboardPage() {
  const summaryCards = [
    {
      title: "اكتمال الملف الشخصي",
      value: "75%",
      icon: User,
      description: "ملفك الشخصي قوي! أكمله للحصول على فرص أفضل.",
      action: {
        href: "/dashboard/profile",
        label: "تعديل الملف الشخصي",
      },
      progress: 75,
    },
    {
      title: "الوظائف المقدم عليها",
      value: "12",
      icon: FileText,
      description: "تم استلام 3 ردود جديدة هذا الأسبوع.",
      action: {
        href: "/dashboard/applications",
        label: "عرض الطلبات",
      },
    },
    {
      title: "الوظائف المحفوظة",
      value: "5",
      icon: Bookmark,
      description: "وظيفة واحدة ستنتهي صلاحيتها قريبًا.",
      action: {
        href: "/dashboard/saved-jobs",
        label: "عرض المحفوظات",
      },
    },
    {
      title: "تنبيهات جديدة",
      value: "8",
      icon: Bell,
      description: "لديك تنبيهات جديدة لوظائف مطابقة.",
       action: {
        href: "/dashboard/notifications",
        label: "عرض التنبيهات",
      },
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">
                {card.description}
              </p>
              {card.progress && <Progress value={card.progress} className="mt-2 h-2" />}
               <Button variant="link" asChild className="p-0 h-auto mt-4">
                <Link href={card.action.href}>
                  {card.action.label}
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle>توصيات وظائف لك</CardTitle>
            <CardDescription>بناءً على ملفك الشخصي واهتماماتك.</CardDescription>
        </CardHeader>
        <CardContent>
            {/* Placeholder for recommended jobs */}
            <div className="text-center py-12 bg-muted rounded-lg">
                <p>سيتم عرض الوظائف الموصى بها هنا.</p>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}
