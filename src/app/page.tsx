import AboutMe from "@/components/aboutMe";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col p-5 w-full items-center">
      <AboutMe />
      <Projects />
    </div>
  );
}
