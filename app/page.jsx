import SectionCarousel from "@/pages/homePage/SectionCarousel";
import SectionHome from "@/pages/homePage/SectionHome";
import SectionTeach from "@/pages/homePage/SectionTeach";

export default function Home() {
  return (
    <main className="">
      <SectionHome />
      <SectionTeach />
      <SectionCarousel />
    </main>
  );
}
