import React from "react";
import Skills from "../components/Skills";
import Project from "../components/Project";

interface homeProps {}

const Home = (props: homeProps) => {
  return (
    <div className=" grid min-h-screen w-screen auto-rows-min grid-cols-4  bg-black pr-5">
      <div className="name col-span-4  grid-cols-subgrid  border sm:col-span-3">
        <p className="text-9xl">Austin Russell</p>
        <p className="text-2xl">phone - (706) 389-1194</p>
        <p className="pt-1 text-2xl">email - amcrussell03@gmail.com</p>
        <p className="pt-4 text-4xl">Prospective Full Stack Developer</p>
      </div>
      <div className="me col-span-4 row-span-2 flex grid-rows-subgrid flex-col items-center border  sm:col-span-1">
        <img
          className="rounded-full"
          src={
            "https://media.licdn.com/dms/image/C4E03AQGmc-s6dLwa6w/profile-displayphoto-shrink_800_800/0/1641596409800?e=1720051200&v=beta&t=KL_JVFLAiP0m3SnN-gt2AbA2y5oGID1_p0SrgZIH3k8"
          }
          alt="photo of me"
        ></img>
        <div className="about-me border-cyan h-52 content-center rounded-md   text-center">
          <p>
            I am looking for a prospective opportunity to improve my skills and
            become a better programmer in a team environment where I can be led
            toward the proper path
          </p>
        </div>
      </div>
      <div className="credentials col-span-3 grid-cols-subgrid grid-rows-subgrid border ">
        <ul className="flex flex-wrap text-white ">
          <Skills name="React"></Skills>
          <Skills name="Building Restful Applications"></Skills>
          <Skills name="Javascript"></Skills>
          <Skills name="Typescript"></Skills>
          <Skills name="Node"></Skills>
          <Skills name="Express"></Skills>
          <Skills name="MYSQL"></Skills>
          <Skills name="Postgress"></Skills>
        </ul>
      </div>
      <div className="projects  col-span-4 flex grid-cols-subgrid grid-rows-subgrid flex-wrap border  ">
        <Project name="Blog" body="sample again but longer"></Project>
        <Project name="Twitter clone" body="sample again but longer"></Project>
        <Project name="sample" body="sample again but longer"></Project>
        <Project name="sample" body="sample again but longer"></Project>
      </div>
    </div>
  );
};

export default Home;
