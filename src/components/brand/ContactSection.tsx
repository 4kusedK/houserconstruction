import { Mail, Phone } from "lucide-react";

import { NumberedSection } from "@/components/brand/NumberedSection";
import { business } from "@/config/business";

export function ContactSection({ number = "03" }: { number?: string }) {
  return (
    <section id="contact" className="bg-navy text-white py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <NumberedSection
            number={number}
            eyebrow="Let's talk"
            title={
              <>
                Tell us what
                <br />
                you're building.
              </>
            }
            onDark
          />
          <p className="mt-8 max-w-md text-lg text-white/80 leading-relaxed">
            Call the number below or send an email. You'll get a straight
            answer from the people who would be doing the work.
          </p>
        </div>

        <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center gap-8">
          <div className="border-t border-white/15 pt-6">
            <p className="eyebrow text-white/50 mb-3">Call us</p>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-3 font-display text-3xl md:text-4xl font-bold text-white hover:text-red-bright transition-colors"
            >
              <Phone className="h-6 w-6 text-red" aria-hidden />
              {business.phone}
            </a>
          </div>

          <div className="border-t border-white/15 pt-6">
            <p className="eyebrow text-white/50 mb-3">Email us</p>
            <a
              href={business.emailHref}
              className="inline-flex items-center gap-3 font-display text-xl md:text-2xl font-bold text-white hover:text-red-bright transition-colors break-all"
            >
              <Mail className="h-5 w-5 text-red shrink-0" aria-hidden />
              {business.email}
            </a>
          </div>

          <div className="border-t border-white/15 pt-6">
            <p className="eyebrow text-white/50 mb-3">Where we work</p>
            <address className="not-italic text-white/80">
              {business.serviceArea}, statewide
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
