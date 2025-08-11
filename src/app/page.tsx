import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, MapPin, Search } from 'lucide-react';
import JobCard from '@/components/job-card';
import { jobCategories, featuredJobs } from '@/lib/placeholder-data';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-muted py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">
            اعثر على وظيفة أحلامك بلمسة واحدة
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            منصتنا الذكية تربطك بآلاف الفرص الوظيفية في جميع أنحاء المملكة. ابدأ البحث الآن.
          </p>
          <div className="max-w-2xl mx-auto bg-card p-4 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="مسمى وظيفي، كلمات مفتاحية، أو شركة"
                  className="w-full pr-10 pl-4 py-3 h-12 text-base"
                />
              </div>
              <Button size="lg" className="w-full h-12 text-base bg-accent hover:bg-accent/90">
                بحث
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">تصفح حسب الفئة</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {jobCategories.map((category) => (
              <Link href="/search" key={category.name} className="block group">
                <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <div className="p-4 bg-muted rounded-full mb-4">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">وظائف مميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/search">عرض جميع الوظائف</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
