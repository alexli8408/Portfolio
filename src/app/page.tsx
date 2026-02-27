import Image from "next/image";
import BulletItem from "./components/BulletItem";
import SubItem from "./components/SubItem";
import AnimatedLink from "./components/AnimatedLink";
import AnimatedSection from "./components/AnimatedSection";
import UWaterlooLogo from "./components/icon/UWaterloo.png";
import UWOrbitalLogo from "./components/icon/UWOrbital.png";
import CEcloudLogo from "./components/icon/CEcloud.png";
import TsinghuaLogo from "./components/icon/Tsinghua.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-1 text-base">
      {/* Education */}
      <AnimatedSection>
        <BulletItem>
          <em className="font-medium text-stone-500 dark:text-stone-400">
            Education
          </em>
        </BulletItem>
        <ul className="grid gap-1 pl-4">
          <SubItem>
            Computer Engineering
            <span className="inline-flex items-baseline gap-1 ml-1">
              <Image src={UWaterlooLogo} alt="UWaterloo" width={14} height={14} className="object-contain relative top-[2px]" />
              <AnimatedLink href="https://uwaterloo.ca" className="font-medium">
                University of Waterloo
              </AnimatedLink>
            </span>
          </SubItem>
        </ul>
      </AnimatedSection>

      {/* Experiences */}
      <AnimatedSection>
        <BulletItem>
          <em className="font-medium text-stone-500 dark:text-stone-400">
            Experiences
          </em>
        </BulletItem>
        <ul className="grid gap-1 pl-4">
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/UW-Orbital" className="font-medium">
              Software Developer
            </AnimatedLink>
            <span className="inline-flex items-baseline gap-1 ml-1">
              <Image src={UWOrbitalLogo} alt="UW Orbital" width={14} height={14} className="object-contain relative top-[2px]" />
              <AnimatedLink href="https://www.uworbital.com" className="font-medium">
                UW Orbital
              </AnimatedLink>
            </span>
          </SubItem>
          <SubItem>
            Computer Architecture Research Intern
            <span className="inline-flex items-baseline gap-1 ml-1">
              <Image src={CEcloudLogo} alt="CEcloud" width={14} height={14} className="object-contain relative top-[2px] bg-white rounded-full" />
              <AnimatedLink href="https://cecloud.com" className="font-medium">
                CEcloud
              </AnimatedLink>
            </span>
          </SubItem>
          <SubItem>
            Full Stack Development Intern
            <span className="inline-flex items-baseline gap-1 ml-1">
              <Image src={TsinghuaLogo} alt="Tsinghua" width={14} height={14} className="object-contain relative top-[2px] bg-white rounded-full" />
              <AnimatedLink href="https://www.tsinghua.edu.cn/en/" className="font-medium">
                Tsinghua University
              </AnimatedLink>
            </span>
          </SubItem>
        </ul>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects">
        <BulletItem>
          <em className="font-medium text-stone-500 dark:text-stone-400">
            Projects
          </em>
        </BulletItem>
        <ul className="grid gap-1 pl-4">
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/linkmark" className="font-medium">
              Linkmark
            </AnimatedLink>{" "}
            &mdash; Full Stack Cloud Bookmark Manager
          </SubItem>
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/palette-ai" className="font-medium">
              PaletteAI
            </AnimatedLink>{" "}
            &mdash; Full Stack AI Palette Generator
          </SubItem>
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/co-whiteboard" className="font-medium">
              CoWhiteboard
            </AnimatedLink>{" "}
            &mdash; Real-Time Collaborative Whiteboard
          </SubItem>
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/truelight" className="font-medium">
              TrueLight
            </AnimatedLink>{" "}
            &mdash; React Native Dashcam App
          </SubItem>
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/data-structures-library" className="font-medium">
              Data Structures Library
            </AnimatedLink>{" "}
            &mdash; C++ Data Structures Library
          </SubItem>
        </ul>
      </AnimatedSection>
    </div>
  );
}
