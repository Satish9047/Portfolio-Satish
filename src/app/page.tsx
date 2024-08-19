import Hero from "@/components/Hero";
import Skill from "@/components/Skill";
import ThemeToggleBtn from "@/components/ThemeToggle";
import { useGlobalState } from "@/zustand/store";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen p-4">
      <div className="w-full md:w-5/6">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="grid w-full col-span-8 ">
            <div className="flex flex-wrap gap-4">
              <Skill />
            </div>
          </div>
          <div className="grid w-full col-span-4">
            <div className="flex justify-end w-full">
              <ThemeToggleBtn />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
