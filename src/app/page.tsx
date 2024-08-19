import Hero from "@/components/Hero";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import ThemeToggleBtn from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full md:w-7/12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 ">
          <section className="grid order-2 w-full gap-8 md:col-span-8 md:order-1">
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold">Skills</h1>
              <div className="flex flex-wrap gap-4 ">
                <Skill />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold">Projects</h1>
              <div className="flex flex-col flex-wrap gap-4 ">
                <Project />
              </div>
            </div>
          </section>
          <section className="grid order-1 w-full md:col-span-4 md:order-2">
            <div className="flex flex-col w-full gap-4">
              <ThemeToggleBtn />
              <div className="bg-gray-200 rounded-md shadow-md ">
                <Hero />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
