import { Hammer, Wrench, Scissors, Scroll, Hand, Paintbrush, LucideIcon } from 'lucide-react';

export type Job = {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: 'دوام كامل' | 'دوام جزئي' | 'عن بعد' | 'ورشة عمل';
  salary?: string;
  postedDate: string;
  description: string;
  dataAiHint?: string;
};

export type JobCategory = {
  name: string;
  icon: LucideIcon;
};

export const jobCategories: JobCategory[] = [
  { name: 'نجارة', icon: Hammer },
  { name: 'حدادة', icon: Wrench },
  { name: 'خياطة', icon: Scissors },
  { name: 'فخار', icon: Scroll },
  { name: 'صناعة يدوية', icon: Hand },
  { name: 'رسم', icon: Paintbrush },
];

export const featuredJobs: Job[] = [
  {
    id: 1,
    title: 'نجار أثاث',
    company: 'ورشة الخشب الذهبي',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'carpentry workshop',
    location: 'الرياض',
    type: 'دوام كامل',
    salary: '٦,٠٠٠ - ٩,٠٠٠ ريال',
    postedDate: 'منذ يوم واحد',
    description: 'نبحث عن نجار ماهر لصناعة أثاث مخصص عالي الجودة.',
  },
  {
    id: 2,
    title: 'مصمم أزياء وخياط',
    company: 'أتيليه الأناقة',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'fashion studio',
    location: 'جدة',
    type: 'دوام جزئي',
    salary: '٥,٠٠٠ - ٧,٠٠٠ ريال',
    postedDate: 'منذ ٣ أيام',
    description: 'فرصة لمصمم أزياء موهوب للانضمام إلى فريقنا وتنفيذ تصاميم فريدة.',
  },
  {
    id: 3,
    title: 'فنان تشكيلي (رسم)',
    company: 'مرسم الفنون الجميلة',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'art studio',
    location: 'الدمام',
    type: 'ورشة عمل',
    postedDate: 'منذ أسبوع',
    description: 'مطلوب رسام للمشاركة في مشاريع فنية مختلفة وإنتاج لوحات أصلية.',
  },
];

export const allJobs: Job[] = [
  ...featuredJobs,
  {
    id: 4,
    title: 'خزاف وصانع فخار',
    company: 'بيت الطين',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'pottery workshop',
    location: 'الرياض',
    type: 'دوام كامل',
    salary: '٧,٠٠٠ - ١٠,٠٠٠ ريال',
    postedDate: 'منذ يومين',
    description: 'تشكيل وتصميم قطع فخارية فريدة باستخدام تقنيات يدوية.',
  },
  {
    id: 5,
    title: 'صانع منتجات جلدية',
    company: 'الجلد الأصيل',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'leather goods',
    location: 'عن بعد',
    type: 'عن بعد',
    salary: 'حسب المشروع',
    postedDate: 'منذ ٤ أيام',
    description: 'تصنيع منتجات جلدية يدوية مثل الحقائب والمحافظ.',
  },
  {
    id: 6,
    title: 'حداد فني',
    company: 'ورشة الحديد المطاوع',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'blacksmith workshop',
    location: 'جدة',
    type: 'دوام كامل',
    postedDate: 'منذ ٥ أيام',
    description: 'تشكيل الحديد لإنشاء قطع فنية وديكورات معدنية.',
  },
  {
    id: 7,
    title: 'خياطة وتطريز',
    company: 'لمسة حرير',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'embroidery shop',
    location: 'الرياض',
    type: 'دوام كامل',
    salary: '٥,٠٠٠ - ٨,٠٠٠ ريال',
    postedDate: 'منذ ٦ أيام',
    description: 'تنفيذ أعمال الخياطة والتطريز الدقيقة للملابس والمنسوجات.',
  },
  {
    id: 8,
    title: 'ورشة عمل للنجارة للمبتدئين',
    company: 'ورشة الخشب الذهبي',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'carpentry tools',
    location: 'الرياض',
    type: 'ورشة عمل',
    postedDate: 'منذ ١٠ أيام',
    description: 'ورشة عمل لتعليم أساسيات النجارة وصناعة قطعة خشبية بسيطة.',
  },
];
