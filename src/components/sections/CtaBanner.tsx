import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FadeUp } from "@/components/animations/FadeUp";

export function CtaBanner() {
  return (
    <section className="relative py-28 md:py-36">
      <Container>
        <FadeUp>
          <GlassCard className="relative overflow-hidden p-10 text-center md:p-16">
            <div className="absolute inset-0 bg-grid-glow opacity-70" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl font-semibold text-paper md:text-4xl">
                ایده پروژه بعدی خود را دارید؟
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-8 text-mist">
                بیایید درباره آن صحبت کنیم. از طراحی وب‌سایت تا اتوماسیون
                و سئو، آماده کمک به تحقق ایده شما هستم.
              </p>
              <div className="mt-8 flex justify-center">
                <MagneticButton href="/contact" variant="primary">
                  شروع همکاری
                </MagneticButton>
              </div>
            </div>
          </GlassCard>
        </FadeUp>
      </Container>
    </section>
  );
}
