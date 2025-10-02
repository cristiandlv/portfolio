"use client";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiNodedotjs } from "react-icons/si";

export default function TechIcons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
      <SiReact className="text-sky-400" size={32} title="React" />
      <SiNextdotjs className="text-black dark:text-white" size={32} title="Next.js" />
      <SiTailwindcss className="text-cyan-500" size={32} title="Tailwind CSS" />
      <SiTypescript className="text-blue-600" size={32} title="TypeScript" />
      <SiJavascript className="text-yellow-400" size={32} title="JavaScript" />
      <SiHtml5 className="text-orange-500" size={32} title="HTML5" />
      <SiCss3 className="text-blue-500" size={32} title="CSS3" />
    </div>
  );
}
