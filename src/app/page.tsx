import BulletItem from "./components/BulletItem";
import SubItem from "./components/SubItem";
import AnimatedLink from "./components/AnimatedLink";

export default function Home() {
  return (
    <div className="flex flex-col gap-1 text-base">
      {/* Education */}
      <ul className="group grid gap-1 hover:translate-x-1 transition-transform duration-200">
        <BulletItem>
          <em className="font-medium text-stone-500 dark:text-stone-400">
            Education
          </em>
        </BulletItem>
        <ul className="grid gap-1 pl-4">
          <SubItem>
            Computer Engineering @{" "}
            <AnimatedLink href="https://uwaterloo.ca">
              University of Waterloo
            </AnimatedLink>
          </SubItem>
        </ul>
      </ul>

      {/* Experiences */}
      <ul className="group grid gap-1 hover:translate-x-1 transition-transform duration-200">
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
            @{" "}
            <AnimatedLink href="https://www.uworbital.com">
              UW Orbital
            </AnimatedLink>
          </SubItem>
          <SubItem>
            Computer Architecture Research Intern @{" "}
            <AnimatedLink href="https://cecloud.com">
              CEcloud
            </AnimatedLink>
          </SubItem>
          <SubItem>
            Full Stack Development Intern @{" "}
            <AnimatedLink href="https://www.tsinghua.edu.cn/en/">
              Tsinghua University
            </AnimatedLink>
          </SubItem>
        </ul>
      </ul>

      {/* Projects Section */}
      <ul id="projects" className="group grid gap-1 hover:translate-x-1 transition-transform duration-200">
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
