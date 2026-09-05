import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CaseStudyView } from "@/components/CaseStudyView";
import {
  getAllCaseStudySlugs,
  getCaseStudy,
} from "@/lib/case-studies";
import { personalInfo } from "@/lib/portfolio-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: `${study.title} - ${personalInfo.fullName}`,
    description: study.oneLiner,
    openGraph: {
      title: `${study.title} - Case study`,
      description: study.oneLiner,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main id="top">
        <CaseStudyView study={study} />
      </main>
      <Footer />
    </>
  );
}
