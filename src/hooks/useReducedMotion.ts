"use client";

import { useEffect, useState } from "react";

/**
 * تشخیص ترجیح کاهش انیمیشن کاربر (prefers-reduced-motion) و دستگاه‌های ضعیف
 * برای غیرفعال‌کردن جلوه‌های سنگین روی موبایل‌های کم‌توان
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lowEndDevice =
      typeof navigator !== "undefined" &&
      "hardwareConcurrency" in navigator &&
      navigator.hardwareConcurrency <= 4;

    setReduced(query.matches || lowEndDevice);

    const listener = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return reduced;
}
