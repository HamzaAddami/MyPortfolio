import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="pt-16 sm:pt-24 md:pt-32 max-sm:pt-32 max-sm:my-14 " style={{ height: "655px" }}>
      <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
              <div class="relative">
                <img
                  src="/public/Pictures/MyPic.jpg"
                  class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] max-h-[150px]"
                />
              </div>
            </div>
            <div class="w-full text-center mt-20">
              <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    FullStack
                  </span>
                  <span class="text-sm text-slate-400">Education</span>
                </div>
                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    +2 years
                  </span>
                  <span class="text-sm text-slate-400">Experience</span>
                </div>

                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    5/5
                  </span>
                  <span class="text-sm text-slate-400">Rating</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-2">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
              Hamza Addami
            </h3>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              Casablanca, Morocco
            </div>
          </div>
          <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4">
                <p class="font-light leading-relaxed text-slate-600 mb-4">
                  I'm a 21-year-old web developer currently studying web
                  development at OFPPT. My passion lies in crafting engaging and
                  functional websites.
                </p>
                <a
                  href="javascript:;"
                  class="font-normal text-nav hover:text-hover"
                >
                  Download CV→
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
// Hello, I'm a 21-year-old web developer currently studying web
// development at OFPPT. My passion lies in crafting engaging and
// functional websites. Through my coursework and hands-on
// experience, I've honed my skills in coding, problem-solving, and
// creating user-friendly interfaces. I'm excited about the
// ever-evolving world of web development and eager to contribute my
// skills to innovative projects.
