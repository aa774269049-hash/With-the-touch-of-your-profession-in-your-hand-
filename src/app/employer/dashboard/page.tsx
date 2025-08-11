import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, Eye, ArrowLeft } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import UserBehaviorAnalysis from '@/components/user-behavior-analysis';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const recentCandidates = [
  { name: 'أحمد علي', appliedFor: 'مهندس برمجيات', avatar: 'https://placehold.co/40x40.png', dataAiHint: 'man portrait' },
  { name: 'فاطمة محمد', appliedFor: 'مصمم واجهات مستخدم', avatar: 'https://placehold.co/40x40.png', dataAiHint: 'woman portrait' },
  { name: 'خالد عبدالله', appliedFor: 'مدير تسويق', avatar: 'https://placehold.co/40x40.png', dataAiHint: 'man glasses' },
]

export default function EmployerDashboardPage() {
  const summaryCards = [
    { title: "الوظائف النشطة", value: "4", icon: Briefcase },
    { title: "طلبات جديدة", value: "25", icon: Users },
    { title: "مشاهدات الوظائف (آخر 7 أيام)", value: "1,280", icon: Eye },
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>أحدث المتقدمين</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>المرشح</TableHead>
                  <TableHead>الوظيفة</TableHead>
                  <TableHead className="text-left"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentCandidates.map((candidate) => (
                  <TableRow key={candidate.name}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={candidate.avatar} data-ai-hint={candidate.dataAiHint} />
                          <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{candidate.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{candidate.appliedFor}</TableCell>
                    <TableCell className="text-left">
                       <Button variant="outline" size="sm">عرض الملف</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
             <Button asChild variant="outline" className="w-full">
                <Link href="/employer/candidates">عرض جميع المرشحين</Link>
             </Button>
          </CardFooter>
        </Card>
        
        <div className="lg:col-span-3">
            <UserBehaviorAnalysis />
        </div>
      </div>
    </div>
  )
}
