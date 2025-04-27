import AboutMe from "@/components/aboutMe";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col p-5 w-full items-center gap-[10px]">
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}
