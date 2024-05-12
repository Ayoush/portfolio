import { RootTransition, ChildTransition } from "../Common/transition";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import BorderGlowButton from "../Common/button";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const rootTransitionRef = useRef(null);

  return (
    <RootTransition
      show={show}
      ref={rootTransitionRef}
    >
      <div className="flex items-center flex-col w-full h-screen gap-16 justify-center border bg-gray-100">
        <ChildTransition
          direction="left" delay={500}
        >
          <h1
            className="font-pacifico text-center text-transparent text-5xl text-stroke-black"
          >
            Hey, I’m <span className="text-black text-stroke-none">Ayoush Chourasia</span>
          </h1>
        </ChildTransition>

        <ChildTransition direction="right" delay={500}>
        <h2 className="text-center text-transparent text-5xl text-stroke-black">
  Crafting digital marvels as a{" "}
  <span className="text-black text-stroke-none">Full Stack</span>{" "}
  maestro,{" "}
  <span className="text-black text-stroke-none">Web3</span>{" "}
  visionary,{" "}
  <span className="text-black text-stroke-none">Blockchain</span>{" "}
  aficionado,{" "}
  <span className="text-black text-stroke-none">Game</span>{" "}
  architect,{" "}
  <span className="text-black text-stroke-none">Open Source</span>{" "}
  devotee,{" "}
  <span className="text-black text-stroke-none">Strength</span>{" "}
  enthusiast,{" "}
  <span className="text-black text-stroke-none">Storyteller</span>{" "}
  by dusk.
</h2>
        </ChildTransition>

        <ChildTransition direction="up" delay={300}>
          <div className="flex gap-4">
            <Link  to={"/github"} >
              {/* <a className="text-stroke-dark-gray text-2xl text-transparent after:bg-gray-dark">
                -&gt; My Projects
              </a> */}
              <BorderGlowButton displayText={"My Projects"}></BorderGlowButton>
            </Link>
            <Link to={"/profile"}>
              {/* <a className="text-stroke-dark-gray text-2xl text-transparent after:bg-gray-dark">
                -&gt; More about me
              </a> */}
              <BorderGlowButton displayText={"More about me"}></BorderGlowButton>
            </Link>
          </div>
        </ChildTransition>
      </div>
    </RootTransition>
  );
}