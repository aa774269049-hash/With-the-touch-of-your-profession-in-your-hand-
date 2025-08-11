import SmartSearchForm from "@/components/smart-search-form"

export default function SmartSearchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          البحث الذكي المدعوم بالذكاء الاصطناعي
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          تجاوز البحث التقليدي. صف لنا ما تبحث عنه، وسيقوم نظامنا الذكي باقتراح أفضل الوظائف لك مع شرح الأسباب.
        </p>
      </div>
      <SmartSearchForm />
    </div>
  )
}
