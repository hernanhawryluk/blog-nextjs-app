"use client";

import React from "react";
import Image from "next/image";
import Button from "../components/button";

const About = () => {
  const aboutData = [
    {
      id: 1,
      title: "Portfolio Website",
      link: "https://portfolio-hernan-hawryluks-projects.vercel.app/",
    },
    {
      id: 2,
      title: "GitHub",
      link: "https://github.com/hernanhawryluk/",
    },
    {
      id: 3,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/hernan-hawryluk/",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:py-2">
      <div className="w-full sm:w-3/4 sm:pr-[50px] xl:pr-[160px]">
        <h1 className="font-bold text-2xl sm:text-4xl mb-6">About Me</h1>
        <p className="font-normal text-sm sm:text-xl mb-8">
          I am a Full-Stack developer with solid experience in React, Node.js,
          and Next.js using TypeScript. I also have skills in Django, React
          Native, Bootstrap, and Tailwind, among other key technologies. I have
          knowledge in implementing relational and NoSQL databases such as
          Firebase and MongoDB. My versatile approach allows me to develop web
          and mobile applications comprehensively, from their initial conception
          to deployment.
        </p>
        <p className="font-normal text-sm sm:text-xl mb-8">
          I am proficient in English, which has provided me with the opportunity
          to study with leading companies in the market such as Meta, Google,
          and IBM. These experiences have not only allowed me to enhance my
          English skills but also acquire a deep understanding of industry best
          practices and standards. Additionally, I am familiar with Agile and
          Scrum methodologies, as well as version control tools.
        </p>
        <p className="font-normal text-sm sm:text-xl sm:mb-8">
          My commitment and skills are reflected in the quality of the products
          and interfaces I develop. Explore my portfolio or my GitHub repository
          for a deeper insight into my dedication and abilities.
        </p>
        <p className="font-normal text-sm sm:text-xl sm:mb-8">
          Thanks for visiting!
        </p>
      </div>
      <div className="flex flex-col sm:w-1/4 pt-8 sm:py-2 gap-7 sm:mt-14">
        <Image
          src={"/about.png"}
          alt="contact"
          width={400}
          height={400}
          className="hidden sm:block object-cover shadow-xl rounded-full opacity-90 w-full mb-4"
        />
        {aboutData.map((data) => (
          <a key={data.id} href={data.link} target="_blank">
            <Button
              label={data.title}
              custom="border-2 border-gray-600 dark:border-none dark:bg-white/85 hover:dark:bg-white/95 dark:text-gray-900 text-xs h-[40px] shadow-md"
              onClick={() => {}}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default About;
