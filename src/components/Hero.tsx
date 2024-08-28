"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const name = "Satish Prajapati";
  useGSAP(() => {
    const heroTl = gsap.timeline();

    heroTl.from(".animateToTop", {
      y: 50,
      opacity: 0,
      duration: 0.2,
      delay: 0.2,
      stagger: 0.2,
    });
  }, []);

  return (
    <main className="flex flex-col justify-center py-4  bg-gray-200 rounded-md shadow-md animateToTop">
      <figure className="w-full h-full py-6">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={250}
          height={250}
          priority
          className="mx-auto rounded-full"
        />
      </figure>
      <div className="px-4 space-y-4 font-semibold text-gray-700">
        <div className="text-xl font-semibold text-center text-gray-500">
          <h2 className="text-2xl text-gray-700">{name}</h2>
          <p>satishprajapati930@gmail.com | 9840252791</p>
          <p className="text-lg">
            Web Developer | Full-Stack Developer | JavaScript Developer
          </p>
        </div>
        <div>
          <div>
            <h3 className="text-2xl">Eduction</h3>
            <div className="px-2 text-lg text-gray-500">
              <span className="flex justify-between">
                <p>Bachelor</p> <p>ISMT College</p>
              </span>
              <span className="flex justify-between">
                <p>High School</p> <p>Khwopa H.S.S</p>
              </span>
              <span className="flex justify-between">
                <p>School</p> <p>Himalayan Glory E.S</p>
              </span>
            </div>
          </div>

          <div className="">
            <h3 className="text-2xl ">Experience</h3>
            <div className="px-2 text-lg text-gray-500">
              <div>
                <h3 className="text-gray-700 underline ">
                  Leapfrog Technology
                </h3>
                <ul>
                  <li>
                    <span>Position:</span> Software Development Internship
                  </li>
                  <li>
                    <span>Duration:</span> 2 Month
                  </li>
                  <li>
                    <span>Projects Involved:</span> Book sharing website, Doodle
                    Jump Game, front-end development, backend development
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-700 underline ">Free Lance</h3>
                <ul>
                  <li>
                    <span>Position:</span> Web Developer
                  </li>
                  <li>
                    <span>Projects Involved: </span> Portfolio websites
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
