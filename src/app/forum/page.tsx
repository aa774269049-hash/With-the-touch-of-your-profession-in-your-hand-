import { MessageSquare } from "lucide-react";

export default function ForumPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="max-w-2xl mx-auto">
        <MessageSquare className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline mb-4">
          منتدى المجتمع
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          قريباً! مساحة تفاعلية لتبادل الخبرات والنصائح المهنية مع الآخرين.
        </p>
        <div className="p-8 bg-muted rounded-lg">
          <h3 className="text-xl font-semibold">ماذا تتوقع؟</h3>
          <ul className="list-disc list-inside text-left mt-4 max-w-md mx-auto space-y-2">
            <li>مناقشات حول مجالات العمل المختلفة</li>
            <li>نصائح حول كتابة السيرة الذاتية والمقابلات</li>
            <li>مشاركة قصص النجاح والتحديات</li>
            <li>التواصل مع محترفين في مجالك</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
