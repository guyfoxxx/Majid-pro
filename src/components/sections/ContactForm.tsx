"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { contactSchema, type ContactFormValues } from "@/lib/contactSchema";
import { cn } from "@/lib/utils";

// آدرس فرم Formspree خود را جایگزین کنید (سرویس خارجی، بدون نیاز به بک‌اند)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const PROJECT_TYPES = [
  "وب‌سایت شرکتی",
  "اپلیکیشن اندروید",
  "اتوماسیون",
  "سئو",
  "مشاوره فنی",
  "سایر",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("loading");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("submit_failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <GlassCard className="flex flex-col items-center gap-4 p-12 text-center">
        <CheckCircle2 className="text-electric-light" size={40} />
        <h3 className="font-display text-xl font-semibold text-paper">
          پیام شما ارسال شد
        </h3>
        <p className="max-w-sm text-sm text-mist">
          به‌زودی با شما تماس می‌گیرم. از اینکه وقت گذاشتید سپاسگزارم.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-7 md:p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 md:grid-cols-2">
        <Field label="نام و نام خانوادگی" error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            placeholder="نام شما"
            className={inputClass}
          />
        </Field>

        <Field label="ایمیل" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className={inputClass}
            dir="ltr"
          />
        </Field>

        <Field label="شماره تماس" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="09xxxxxxxxx"
            className={inputClass}
            dir="ltr"
          />
        </Field>

        <Field label="نوع پروژه" error={errors.projectType?.message}>
          <select {...register("projectType")} className={inputClass} defaultValue="">
            <option value="" disabled>
              انتخاب کنید
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="پیام شما" error={errors.message?.message} full>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="درباره پروژه خود بنویسید..."
            className={cn(inputClass, "resize-none")}
          />
        </Field>

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-tr from-electric to-violet px-8 py-3.5 text-sm font-medium text-white shadow-glow transition-opacity hover:opacity-90 disabled:opacity-60 md:col-span-2"
        >
          {status === "loading" && <Loader2 className="animate-spin" size={16} />}
          ارسال پیام
        </button>

        {status === "error" && (
          <p className="text-sm text-red-400 md:col-span-2">
            ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید یا مستقیماً ایمیل بزنید.
          </p>
        )}
      </form>
    </GlassCard>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-paper placeholder:text-mist/50 outline-none transition-colors focus:border-electric-light/60";

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", full && "md:col-span-2")}>
      <label className="text-sm text-mist">{label}</label>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
