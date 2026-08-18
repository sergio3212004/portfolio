import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <div className="w-full">
      <HeroSection dict={dict.hero} />
      <AboutSection dict={dict.about} />
      <SkillsSection dict={dict.skills} />
      <ProjectsSection dict={dict.projects} />
      <ExperienceSection dict={dict.experience} />
      <ContactSection dict={dict.contact} />
    </div>
  );
}
