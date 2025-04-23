import AboutMe from "@/components/aboutMe";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col justify-center p-5">
      <AboutMe />
      <Projects />
    </div>
  );
}
