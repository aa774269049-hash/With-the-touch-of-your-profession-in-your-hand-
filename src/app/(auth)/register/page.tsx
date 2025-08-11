"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { auth } from "@/lib/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useToast } from "@/hooks/use-toast"

export default function RegisterPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
       toast({
        title: "تم إنشاء الحساب بنجاح",
        description: `مرحباً بك، ${user.displayName}!`,
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من إنشاء حسابك عبر جوجل. الرجاء المحاولة مرة أخرى.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">إنشاء حساب جديد</CardTitle>
          <CardDescription>
            انضم إلينا اليوم وابدأ رحلتك المهنية.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullname">الاسم الكامل</Label>
              <Input id="fullname" type="text" placeholder="اسمك الكامل" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input id="email" type="email" placeholder="email@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input id="password" type="password" required />
            </div>
             <div className="space-y-2">
              <Label>نوع الحساب</Label>
              <RadioGroup defaultValue="seeker" className="flex gap-4 pt-2">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="seeker" id="seeker" />
                  <Label htmlFor="seeker">باحث عن عمل</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="employer" id="employer" />
                  <Label htmlFor="employer">صاحب عمل</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full">
              إنشاء الحساب
            </Button>
          </form>
           <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                أو أنشئ حساباً عبر
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={handleGoogleSignIn}>Google</Button>
            <Button variant="outline">LinkedIn</Button>
          </div>
          <div className="mt-6 text-center text-sm">
            لديك حساب بالفعل؟{" "}
            <Link href="/login" className="text-primary hover:underline">
              سجل الدخول
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
