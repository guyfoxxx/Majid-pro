import Link from "next/link";
import { Github, Linkedin, Send, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

const SOCIALS = [
  { href: "https://github.com/", label: "گیت‌هاب", icon: Github },
  { href: "https://linkedin.com/", label: "لینکدین", icon: Linkedin },
  { href: "https://t.me/", label: "تلگرام", icon: Send },
  { href: "mailto:hello@majidfekrmand.ir", label: "ایمیل", icon: Mail },
];

const FOOTER_LINKS = [
  { href: "/about", label: "درباره من" },
  { href: "/services", label: "خدمات" },
  { href: "/projects", label: "نمونه‌کارها" },
  { href: "/blog", label: "وبلاگ" },
  { href: "/contact", label: "تماس با من" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-paper">
              مجید<span className="text-electric-light">.</span>فکرمند
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-mist">
              توسعه‌دهنده فول‌استک؛ ساخت وب‌سایت‌ها، اپلیکیشن‌ها، سیستم‌های
              اتوماسیون و راهکارهای دیجیتال بهینه.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-paper">دسترسی سریع</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mist transition-colors hover:text-electric-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-paper">شبکه‌های اجتماعی</p>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist transition-colors hover:border-electric-light/50 hover:text-electric-light"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-mist/70 md:flex-row">
          <p>© {new Date().getFullYear()} مجید فکرمند. تمامی حقوق محفوظ است.</p>
          <p>طراحی و توسعه با Next.js</p>
        </div>
      </Container>
    </footer>
  );
}
