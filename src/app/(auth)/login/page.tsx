"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { auth } from "@/lib/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // You can get the user's information from the result object
      const user = result.user;
      console.log(user);
      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: `مرحباً بعودتك، ${user.displayName}!`,
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Error during Google sign-in:", error);
       toast({
        title: "حدث خطأ",
        description: "لم نتمكن من تسجيل دخولك عبر جوجل. الرجاء المحاولة مرة أخرى.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">تسجيل الدخول</CardTitle>
          <CardDescription>
            مرحباً بعودتك! أدخل بياناتك للوصول إلى حسابك.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input id="email" type="email" placeholder="email@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">كلمة المرور</Label>
                <Link href="#" className="text-sm text-primary hover:underline">
                  هل نسيت كلمة المرور؟
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              تسجيل الدخول
            </Button>
          </form>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                أو سجل الدخول عبر
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={handleGoogleSignIn}>Google</Button>
            <Button variant="outline">LinkedIn</Button>
          </div>
          <div className="mt-6 text-center text-sm">
            ليس لديك حساب؟{" "}
            <Link href="/register" className="text-primary hover:underline">
              أنشئ حساباً جديداً
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
