"use client";

import { useRef } from "react";
import { Calendar, Mail, Send } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { registerGsapPlugins, useGSAP } from "@/lib/gsap-config";
import { revealOnScroll } from "@/lib/gsap-animations";
import { branding, personalInfo } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  registerGsapPlugins();

  useGSAP(
    () => {
      revealOnScroll(sectionRef, ".contact-panel", { y: 40, duration: 0.75 });
      revealOnScroll(sectionRef, ".contact-item", { y: 20, stagger: 0.1, delay: 0.25 });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="contact" className="section-pad pb-32">
      <div className="container-wide">
        <div className="contact-panel ai-panel-glow glass-strong rounded-3xl p-10 md:p-14 text-center">
          <div className="contact-item section-heading">
          <SectionHeading
            label="Contact"
            title="Let's work together"
            description={branding.tagline}
            align="center"
            className="[&_.glass-label]:mx-auto mb-6"
          />
          </div>

          <p className="contact-item text-muted max-w-md mx-auto mb-10 text-sm font-medium leading-relaxed">
            {personalInfo.shortBio}
          </p>

          <div className="contact-item flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={personalInfo.calendlyUrl}
              variant="accent"
              external
              className="w-full sm:w-auto"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              Book a meeting
            </Button>
            <Button
              href={`mailto:${personalInfo.email}`}
              variant="secondary"
              external
              className="w-full sm:w-auto"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email me
            </Button>
            <Button
              href={personalInfo.linkedinUrl}
              variant="secondary"
              external
              className="w-full sm:w-auto"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </Button>
          </div>

          <a
            href={`mailto:${personalInfo.email}?subject=Project%20Inquiry`}
            className="contact-item mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-hover transition-colors duration-200 cursor-pointer"
          >
            <Send className="h-4 w-4" aria-hidden />
            Or send a project inquiry
          </a>
        </div>
      </div>
    </section>
  );
}
