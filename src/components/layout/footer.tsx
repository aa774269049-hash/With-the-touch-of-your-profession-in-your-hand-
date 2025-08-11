import Link from 'next/link';
import { Briefcase, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Briefcase className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground font-headline">محفظتك بلمسة</span>
            </Link>
            <p className="text-sm">
              منصة ذكية تربط الباحثين عن عمل بأفضل الفرص الوظيفية في المملكة.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">للشركات</h4>
            <ul className="space-y-2">
              <li><Link href="/employer/dashboard" className="hover:text-primary">نشر وظيفة</Link></li>
              <li><Link href="#" className="hover:text-primary">باقات الأسعار</Link></li>
              <li><Link href="#" className="hover:text-primary">حلول التوظيف</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">للباحثين عن عمل</h4>
            <ul className="space-y-2">
              <li><Link href="/search" className="hover:text-primary">بحث عن وظائف</Link></li>
              <li><Link href="/login" className="hover:text-primary">تسجيل الدخول</Link></li>
              <li><Link href="/register" className="hover:text-primary">إنشاء حساب</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-primary">الأسئلة الشائعة</Link></li>
              <li><Link href="#" className="hover:text-primary">عنا</Link></li>
              <li><Link href="#" className="hover:text-primary">اتصل بنا</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} محفظتك بلمسة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
