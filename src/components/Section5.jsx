import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { RiGraduationCapLine } from "@remixicon/react";
import dbmsCert from "../assets/dbms.png";

export function TimelineDemo() {
  const data = [
    {
      title: "2024-28",
      content: (
        <div>
          <p className="flex gap-3 mb-4 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-normal text-white dark:text-neutral-200">
            <RiGraduationCapLine />Education
          </p>
          <div className="grid grid-cols-1 gap-2">
            <p className="text-white text-base sm:text-lg md:text-2xl">Mangalmay Institute of Engineering and Technology (MIET)</p>
            <p className="text-white text-base sm:text-lg md:text-2xl">B.Tech in Computer Science and Engineering</p>
            <p className="text-white text-base sm:text-lg md:text-2xl">Greater Noida, Uttar Pradesh</p>
          </div>
        </div>
      ),
    },
    {
      title: "2023-24",
      content: (
        <div>
          <p className="mb-4 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-normal text-white dark:text-neutral-200">
            Web Development Journey
          </p>
          <p className="text-white text-base sm:text-lg md:text-xl">
            Self Learning & Personal Projects
          </p>
          <p className="mt-3 sm:mt-5 mb-4 sm:mb-8 text-xs sm:text-sm md:text-base font-normal text-white dark:text-neutral-200">
            Dedicated time to master the MERN stack, exploring backend architectures, API integration, and database management. Actively building real-world projects and diving deep into modern frontend tools like Next.js and Tailwind CSS.
          </p>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div>
          <p className="mb-4 text-xl sm:text-2xl md:text-3xl font-normal text-white dark:text-neutral-200">
            Open Source & Scalable Systems
          </p>
          <div className="mb-4 sm:mb-8">
            <p className="text-white text-base sm:text-lg md:text-xl">Continuous Exploration</p>
          </div>
          <p className="text-white text-sm sm:text-base md:text-xl">
            • Expanding knowledge in Docker, Kubernetes, and AWS.<br />
            • Exploring AI application integration and System Design principles.<br />
            • Building robust backend systems to solve real-world problems.
          </p>
        </div>
      ),
    },
    {
      title: "Jan-Mar 2026",
      content: (
        <div>
          <p className="mb-4 text-xl sm:text-2xl md:text-3xl font-normal text-white dark:text-neutral-200">
            Elite NPTEL Certification
          </p>
          <div className="mb-4 sm:mb-8">
            <p className="text-white text-base sm:text-lg md:text-xl">Data Base Management System</p>
          </div>
          <p className="text-white text-sm sm:text-base md:text-xl">
            • Consolidated Score: 75%<br />
            • Indian Institute of Technology Kharagpur<br />
            • 8-week course covering relational databases, SQL queries, and database design.
          </p>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:mt-5">
            <img src={dbmsCert} alt="NPTEL DBMS Certification" className="w-full max-w-2xl h-auto object-cover rounded-lg border border-neutral-700" />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
