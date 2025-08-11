"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { analyzeUserBehavior } from "@/lib/actions"
import type { AnalyzeUserBehaviorOutput } from "@/ai/flows/analyze-user-behavior"
import { Loader2, Bot, Wand2, BarChart2 } from "lucide-react"

// Sample data to simulate real user interactions
const sampleUserActionsData = `
- Total Job Views: 15,300
- Total Applications: 2,150
- Most Viewed Category: 'Technology' (7,800 views)
- Most Applied Category: 'Technology' (1,200 applications)
- Least Viewed Category: 'Finance' (800 views)
- Average time on page (Job Details): 95 seconds
- Search queries leading to no results: "Data Scientist Riyadh immediate start", "Junior UX designer remote part-time"
- Drop-off point: 30% of users abandon application process at "Upload Resume" step.
- Peak activity hours: 1 PM - 4 PM on weekdays.
`

export default function UserBehaviorAnalysis() {
  const [result, setResult] = useState<AnalyzeUserBehaviorOutput | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAnalysis = async () => {
    setIsLoading(true)
    setError(null)
    setResult(null)
    try {
      const response = await analyzeUserBehavior({
        userActionsData: sampleUserActionsData,
      })
      setResult(response)
    } catch (e) {
      setError("حدث خطأ أثناء تحليل البيانات. الرجاء المحاولة مرة أخرى.")
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <BarChart2 className="text-primary"/>
            تحليل سلوك المستخدم
        </CardTitle>
        <CardDescription>
          احصل على رؤى مدعومة بالذكاء الاصطناعي لتحسين تجربة المستخدم.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-center items-center text-center">
        {isLoading ? (
          <div>
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">
              يقوم الذكاء الاصطناعي بمعالجة البيانات...
            </p>
          </div>
        ) : result ? (
          <div className="space-y-4 text-right w-full">
            <div>
              <h4 className="font-bold">تحليل الاتجاهات</h4>
              <p className="text-sm text-muted-foreground p-2 bg-muted rounded-md mt-1">{result.trendAnalysis}</p>
            </div>
            <div>
              <h4 className="font-bold">توصيات</h4>
              <p className="text-sm text-muted-foreground p-2 bg-muted rounded-md mt-1">{result.recommendations}</p>
            </div>
          </div>
        ) : (
           <div className="text-center">
             <p className="mb-4 text-muted-foreground">انقر على الزر لبدء تحليل بيانات المستخدم الوهمية.</p>
             <Button onClick={handleAnalysis}>
              <Wand2 className="ml-2 h-4 w-4" />
              ابدأ التحليل
            </Button>
           </div>
        )}
        {error && <p className="text-destructive mt-4">{error}</p>}
      </CardContent>
    </Card>
  )
}
