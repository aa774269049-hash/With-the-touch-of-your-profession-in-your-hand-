"use client"

import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { smartJobSearch } from "@/lib/actions"
import type { SmartJobSearchOutput } from "@/ai/flows/smart-job-search"
import { Loader2, Bot, Wand2 } from "lucide-react"

const formSchema = z.object({
  keywords: z.string().min(5, "الرجاء إدخال وصف أطول."),
  location: z.string().min(2, "الرجاء إدخال موقع."),
})

type FormValues = z.infer<typeof formSchema>

export default function SmartSearchForm() {
  const [result, setResult] = useState<SmartJobSearchOutput | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true)
    setError(null)
    setResult(null)
    try {
      const response = await smartJobSearch(data)
      setResult(response)
    } catch (e) {
      setError("حدث خطأ أثناء البحث. الرجاء المحاولة مرة أخرى.")
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="text-primary" />
            <span>أخبرنا عن وظيفة أحلامك</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="keywords">الوصف الوظيفي</Label>
              <Textarea
                id="keywords"
                {...register("keywords")}
                placeholder="مثال: أبحث عن وظيفة في تطوير الويب باستخدام React و Next.js، مع خبرة في بناء تطبيقات قابلة للتوسع..."
                className="h-32"
              />
              {errors.keywords && (
                <p className="text-destructive text-sm mt-1">
                  {errors.keywords.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="location">الموقع المفضل</Label>
              <Input
                id="location"
                {...register("location")}
                placeholder="مثال: الرياض، جدة، أو عن بعد"
              />
              {errors.location && (
                <p className="text-destructive text-sm mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  جاري البحث...
                </>
              ) : (
                "ابحث الآن"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && <p className="text-destructive text-center mt-4">{error}</p>}

      {isLoading && (
         <div className="text-center mt-8">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">يقوم الذكاء الاصطناعي بتحليل طلبك...</p>
         </div>
      )}

      {result && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>الوظائف المقترحة</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.jobSuggestions.map((job, index) => (
                  <li key={index} className="p-3 bg-muted rounded-md">{job}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot />
                <span>لماذا هذه الاقتراحات؟</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-line">{result.reasoning}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
