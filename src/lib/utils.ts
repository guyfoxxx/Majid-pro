import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * ادغام کلاس‌های Tailwind به‌صورت امن (بدون تداخل کلاس‌های تکراری)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
