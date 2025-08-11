import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

const users = [
    { name: 'علي حسن', email: 'ali.hassan@example.com', role: 'باحث عن عمل', joined: '2023-10-01' },
    { name: 'شركة التقدم', email: 'hr@progress.sa', role: 'صاحب عمل', joined: '2023-09-15' },
    { name: 'سارة عبدالله', email: 'sara.a@example.com', role: 'باحث عن عمل', joined: '2023-11-05' },
    { name: 'مشرف النظام', email: 'admin@mahfazatk.sa', role: 'مشرف', joined: '2023-01-01' },
]

export default function AdminUsersPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>إدارة المستخدمين</CardTitle>
                <CardDescription>عرض وتعديل وحذف المستخدمين.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>الاسم</TableHead>
                            <TableHead>البريد الإلكتروني</TableHead>
                            <TableHead>الدور</TableHead>
                            <TableHead>تاريخ الانضمام</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.email}>
                                <TableCell className="font-medium">{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Badge variant={user.role === 'مشرف' ? 'destructive' : 'secondary'}>{user.role}</Badge>
                                </TableCell>
                                <TableCell>{user.joined}</TableCell>
                                <TableCell>
                                     <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                        <Button aria-haspopup="true" size="icon" variant="ghost">
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                        </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>إجراءات</DropdownMenuLabel>
                                            <DropdownMenuItem>تعديل</DropdownMenuItem>
                                            <DropdownMenuItem>حذف</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                 <div className="text-xs text-muted-foreground">
                    عرض <strong>1-10</strong> من <strong>{users.length}</strong> مستخدمين
                </div>
            </CardFooter>
        </Card>
    )
}
