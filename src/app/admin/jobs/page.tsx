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
import { allJobs } from "@/lib/placeholder-data"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

export default function AdminJobsPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>إدارة الوظائف</CardTitle>
                <CardDescription>مراجعة وتعديل وحذف إعلانات الوظائف.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>المسمى الوظيفي</TableHead>
                            <TableHead>الشركة</TableHead>
                            <TableHead>تاريخ النشر</TableHead>
                            <TableHead>الحالة</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allJobs.map((job) => (
                            <TableRow key={job.id}>
                                <TableCell className="font-medium">{job.title}</TableCell>
                                <TableCell>{job.company}</TableCell>
                                <TableCell>{job.postedDate}</TableCell>
                                <TableCell>
                                    <Badge variant="outline">نشط</Badge>
                                </TableCell>
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
                                            <DropdownMenuItem>مراجعة</DropdownMenuItem>
                                            <DropdownMenuItem>إلغاء النشر</DropdownMenuItem>
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
                    عرض <strong>1-10</strong> من <strong>{allJobs.length}</strong> وظائف
                </div>
            </CardFooter>
        </Card>
    )
}
