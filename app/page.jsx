import SectionAbout from "@/pages/homePage/SectionAbout";
import SectionCarousel from "@/pages/homePage/SectionCarousel";
import SectionContents from "@/pages/homePage/SectionContents";
import SectionCourses from "@/pages/homePage/SectionCourses";
import SectionHome from "@/pages/homePage/SectionHome";
import SectionTeach from "@/pages/homePage/SectionTeach";
import SectionWorkingGroup from "@/pages/homePage/SectionWorkingGroup";

export default function Home() {
  return (
    <main className="">
      <SectionHome />
      <SectionTeach />
      <SectionCarousel />
      <SectionContents />
      <SectionCourses />
      <SectionAbout />
      <SectionWorkingGroup />
    </main>
  );
}
