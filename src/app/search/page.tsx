'use client';

import React, { useState } from 'react';
import JobCard from '@/components/job-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { allJobs } from '@/lib/placeholder-data';
import { Bell, Bookmark } from 'lucide-react';

export default function SearchPage() {
  const [salaryRange, setSalaryRange] = useState([5000, 25000]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>تصفية البحث</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="keywords">كلمات مفتاحية</Label>
                <Input id="keywords" placeholder="مهندس برمجيات..." />
              </div>
              <div>
                <Label htmlFor="location">المدينة</Label>
                <Select>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="اختر مدينة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="riyadh">الرياض</SelectItem>
                    <SelectItem value="jeddah">جدة</SelectItem>
                    <SelectItem value="dammam">الدمام</SelectItem>
                    <SelectItem value="all">كل المدن</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>نوع الوظيفة</Label>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox id="full-time" />
                    <Label htmlFor="full-time">دوام كامل</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox id="part-time" />
                    <Label htmlFor="part-time">دوام جزئي</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox id="remote" />
                    <Label htmlFor="remote">عن بعد</Label>
                  </div>
                </div>
              </div>
              <div>
                <Label>مستوى الخبرة</Label>
                 <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر مستوى الخبرة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">مبتدئ</SelectItem>
                    <SelectItem value="mid">متوسط الخبرة</SelectItem>
                    <SelectItem value="senior">خبير</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>نطاق الراتب</Label>
                <Slider
                  value={salaryRange}
                  onValueChange={setSalaryRange}
                  max={50000}
                  step={1000}
                  className="my-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{salaryRange[0]} ريال</span>
                  <span>{salaryRange[1]} ريال</span>
                </div>
              </div>
              <Button className="w-full" variant="secondary">تطبيق الفلاتر</Button>
            </CardContent>
          </Card>
          <div className="mt-4 flex gap-2">
             <Button className="w-full">
                <Bookmark className="ml-2 h-4 w-4" />
                حفظ البحث
            </Button>
            <Button className="w-full" variant="outline">
                <Bell className="ml-2 h-4 w-4" />
                تفعيل التنبيهات
            </Button>
          </div>
        </aside>

        {/* Job Listings */}
        <main className="lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">نتائج البحث ({allJobs.length} وظيفة)</h2>
            <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="ترتيب حسب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">الأكثر صلة</SelectItem>
                  <SelectItem value="newest">الأحدث</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline">تحميل المزيد</Button>
          </div>
        </main>
      </div>
    </div>
  );
}
