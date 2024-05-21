import ProjectSection from "@/components/ProjectSection";
import Section from "@/components/Section";
import dikantin from "@/public/images/Dkantin.png";
import Image from "next/image";


export const metadata = {
  title: "ZAM.DEV | Work And Projects",
  description: "All projects i can create",
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="text-secondary animate-in" style={{ "--index": 1 }}>
          Here are some of the projects I have done and some are still in
          progress.
        </p>
      </div>
      <div
        className="flex flex-col gap-6 w-full animate-in"
        style={{ "--index": 3 }}
      >
        <div >
          <ProjectSection alt={'Dikantin Image Project'} category={"Fullstack | Laravel"} company={"Teaching Factory Jember State Polytechnic"} description={
            "              In this project I developed a backend rest full api using the Laravel framework for the needs of the Dkantin application used by the Jember State Polytechnic, there I implemented bearer token authentication"
          } nameApps={"DKantin Jember State Polytechnic"} src={dikantin} ></ProjectSection>

          <ProjectSection alt={'Dikantin Image Project'} category={"Backend | Laravel"} company={"Teaching Factory Jember State Polytechnic"} description={
            "              In this project I developed a backend rest full api using the Laravel framework for the needs of the Dkantin application used by the Jember State Polytechnic, there I implemented bearer token authentication"
          } nameApps={"DKantin Jember State Polytechnic"} src={dikantin} ></ProjectSection>

          <ProjectSection alt={'Dikantin Image Project'} category={"Backend | Laravel"} company={"Teaching Factory Jember State Polytechnic"} description={
            "              In this project I developed a backend rest full api using the Laravel framework for the needs of the Dkantin application used by the Jember State Polytechnic, there I implemented bearer token authentication"
          } nameApps={"DKantin Jember State Polytechnic"} src={dikantin} ></ProjectSection>
          <ProjectSection alt={'Dikantin Image Project'} category={"Backend | Laravel"} company={"Teaching Factory Jember State Polytechnic"} description={
            "              In this project I developed a backend rest full api using the Laravel framework for the needs of the Dkantin application used by the Jember State Polytechnic, there I implemented bearer token authentication"
          } nameApps={"DKantin Jember State Polytechnic"} src={dikantin} ></ProjectSection>
          <ProjectSection alt={'Dikantin Image Project'} category={"Backend | Laravel"} company={"Teaching Factory Jember State Polytechnic"} description={
            "              In this project I developed a backend rest full api using the Laravel framework for the needs of the Dkantin application used by the Jember State Polytechnic, there I implemented bearer token authentication"
          } nameApps={"DKantin Jember State Polytechnic"} src={dikantin} ></ProjectSection>

        </div>
      </div>
    </div>
  );
}
