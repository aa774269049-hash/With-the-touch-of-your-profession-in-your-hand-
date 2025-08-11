import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewJobPage() {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>نشر وظيفة جديدة</CardTitle>
        <CardDescription>املأ التفاصيل أدناه لنشر وظيفتك وجذب أفضل المرشحين.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="job-title">المسمى الوظيفي</Label>
              <Input id="job-title" placeholder="مثال: مهندس برمجيات" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">الموقع</Label>
              <Input id="location" placeholder="مثال: الرياض" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="job-type">نوع الوظيفة</Label>
              <Select>
                <SelectTrigger id="job-type">
                  <SelectValue placeholder="اختر نوع الوظيفة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">دوام كامل</SelectItem>
                  <SelectItem value="part-time">دوام جزئي</SelectItem>
                  <SelectItem value="remote">عن بعد</SelectItem>
                  <SelectItem value="contract">عقد</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="salary-range">نطاق الراتب (اختياري)</Label>
              <Input id="salary-range" placeholder="مثال: 10,000 - 15,000 ريال" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="job-description">وصف الوظيفة</Label>
            <Textarea
              id="job-description"
              placeholder="صف المهام، المسؤوليات، والمؤهلات المطلوبة..."
              className="min-h-[200px]"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">حفظ كمسودة</Button>
            <Button>نشر الوظيفة</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
