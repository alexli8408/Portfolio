import Image from "next/image";
import BulletItem from "./components/BulletItem";
import SubItem from "./components/SubItem";
import AnimatedLink from "./components/AnimatedLink";
import UWaterlooLogo from "./components/icon/UWaterloo.png";
import UWOrbitalLogo from "./components/icon/UWOrbital.png";
import CEcloudLogo from "./components/icon/CEcloud.png";
import TsinghuaLogo from "./components/icon/Tsinghua.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-1 text-base">
      {/* Education */}
      <ul className="group grid gap-1 hover:translate-x-1 focus-within:translate-x-1 transition-transform duration-200 outline-none" tabIndex={0}>
        <BulletItem>
          <em className="font-medium text-stone-500 dark:text-stone-400">
            Education
          </em>
        </BulletItem>
        <ul className="grid gap-1 pl-4">
          <SubItem>
            Computer Engineering{" "}
            <span className="inline-flex items-baseline gap-1">
              <Image src={UWaterlooLogo} alt="UWaterloo" width={14} height={14} className="object-contain relative top-[2px]" />
              <AnimatedLink href="https://uwaterloo.ca">
                University of Waterloo
              </AnimatedLink>
            </span>
          </SubItem>
        </ul>
      </ul>

      {/* Experiences */}
      <ul className="group grid gap-1 hover:translate-x-1 focus-within:translate-x-1 transition-transform duration-200 outline-none" tabIndex={0}>
        <BulletItem>
          <em className="font-medium text-stone-500 dark:text-stone-400">
            Experiences
          </em>
        </BulletItem>
        <ul className="grid gap-1 pl-4">
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/UW-Orbital">
              Software Developer
            </AnimatedLink>{" "}
            <span className="inline-flex items-baseline gap-1">
              <Image src={UWOrbitalLogo} alt="UW Orbital" width={14} height={14} className="object-contain relative top-[2px]" />
              <AnimatedLink href="https://www.uworbital.com">
                UW Orbital
              </AnimatedLink>
            </span>
          </SubItem>
          <SubItem>
            Computer Architecture Research Intern{" "}
            <span className="inline-flex items-baseline gap-1">
              <Image src={CEcloudLogo} alt="CEcloud" width={14} height={14} className="object-contain relative top-[2px] bg-white rounded-full" />
              <AnimatedLink href="https://cecloud.com">
                CEcloud
              </AnimatedLink>
            </span>
          </SubItem>
          <SubItem>
            Full Stack Development Intern{" "}
            <span className="inline-flex items-baseline gap-1">
              <Image src={TsinghuaLogo} alt="Tsinghua" width={14} height={14} className="object-contain relative top-[2px] bg-white rounded-full" />
              <AnimatedLink href="https://www.tsinghua.edu.cn/en/">
                Tsinghua University
              </AnimatedLink>
            </span>
          </SubItem>
        </ul>
      </ul>

      {/* Projects Section */}
      <ul id="projects" className="group grid gap-1 hover:translate-x-1 focus-within:translate-x-1 transition-transform duration-200 outline-none" tabIndex={0}>
        <BulletItem>
          <em className="font-medium text-stone-500 dark:text-stone-400">
            Projects
          </em>
        </BulletItem>
        <ul className="grid gap-1 pl-4">
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/linkmark">
              Linkmark
            </AnimatedLink>{" "}
            &mdash; Full Stack Cloud Bookmark Manager
          </SubItem>
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/palette-ai">
              PaletteAI
            </AnimatedLink>{" "}
            &mdash; Full Stack AI Palette Generator
          </SubItem>
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/co-whiteboard">
              CoWhiteboard
            </AnimatedLink>{" "}
            &mdash; Real-Time Collaborative Whiteboard
          </SubItem>
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/truelight">
              TrueLight
            </AnimatedLink>{" "}
            &mdash; React Native Dashcam App
          </SubItem>
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/data-structures-library">
              Data Structures Library
            </AnimatedLink>{" "}
            &mdash; C++ Data Structures Library
          </SubItem>
        </ul>
      </ul>
    </div>
  );
}
