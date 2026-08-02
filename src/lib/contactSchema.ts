import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "نام باید حداقل ۲ حرف باشد"),
  email: z.string().email("ایمیل معتبر وارد کنید"),
  phone: z
    .string()
    .min(8, "شماره تماس معتبر وارد کنید")
    .max(20, "شماره تماس معتبر وارد کنید"),
  projectType: z.string().min(1, "نوع پروژه را انتخاب کنید"),
  message: z.string().min(10, "پیام باید حداقل ۱۰ حرف باشد"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
