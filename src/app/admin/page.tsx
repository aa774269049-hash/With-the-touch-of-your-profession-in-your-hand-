import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Users, Briefcase, Building } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "يناير", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "فبراير", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "مارس", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "أبريل", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "مايو", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "يونيو", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "يوليو", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "أغسطس", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "سبتمبر", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "أكتوبر", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "نوفمبر", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "ديسمبر", total: Math.floor(Math.random() * 5000) + 1000 },
]

export default function AdminDashboardPage() {
  const summaryCards = [
    { title: "إجمالي المستخدمين", value: "10,234", icon: Users },
    { title: "إجمالي الوظائف", value: "5,421", icon: Briefcase },
    { title: "إجمالي الشركات", value: "856", icon: Building },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {summaryCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>نظرة عامة على التسجيلات</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
