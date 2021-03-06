import React from "react";
import "./main.css";
import CV from "../resume/cv.pdf"
import imgintro from "../../Assets/images/imginfo1.png";
import Typewriter from "typewriter-effect";


const main = () => {
  return (
    <section className="intro" id="home">
      
      <main className="main">
        <div className="introdescription">
          <div className="left-wrapper">
            <h1 className="intro-heading">Hi, I am </h1>
            <h1 className="intro-heading ih-2">Sarad Gyawali.</h1>

            <div className="tw-effect">
              <Typewriter
                options={{
                  strings: ["MERN", "UI/UX Designer", "Graphics Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="intro-desc">
              <p>
                {" "}
                I am a technophile currently studying BSC CSIT in 3rd semester.
                I have keen interest in MERN stack. I am energetic,cogent and
                quick learner. I am currently exploring MERN stack.{" "}
              </p>
            </div>

            <button className="btn-resume">
              <a
                // href="https://drive.google.com/file/d/1hKmYhVjR3pZyUBvuXAQ9sdy-4GPpiCNb/view?usp=sharing"
                href={CV}
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </button>
          </div>

          <div className="right-desc">
            <img src={imgintro} alt="logoimg" />
          </div>
        </div>
      </main>

      
    </section>
  );
};

export default main;
