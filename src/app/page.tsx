import BulletItem from "./components/BulletItem";
import SubItem from "./components/SubItem";
import AnimatedLink from "./components/AnimatedLink";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      {/* Education */}
      <ul className="flex flex-col gap-2">
        <BulletItem>
          <em className="font-medium text-stone-500 dark:text-stone-400">
            Education
          </em>
        </BulletItem>
        <ul className="flex flex-col gap-2 pl-5">
          <SubItem>
            Computer Engineering @ University of Waterloo
          </SubItem>
        </ul>
      </ul>

      {/* Experiences */}
      <ul className="flex flex-col gap-2 mt-2">
        <BulletItem>
          <em className="font-medium text-stone-500 dark:text-stone-400">
            Experiences
          </em>
        </BulletItem>
        <ul className="flex flex-col gap-2 pl-5">
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/UW-Orbital">
              Software Developer
            </AnimatedLink>{" "}
            @ UW Orbital
          </SubItem>
          <SubItem>
            Computer Architecture Research Intern @ CEcloud
          </SubItem>
          <SubItem>
            Full Stack Development Intern @ Tsinghua University
          </SubItem>
        </ul>
      </ul>

      {/* Projects Section */}
      <ul id="projects" className="flex flex-col gap-2 mt-4">
        <BulletItem>
          <em className="font-medium text-stone-500 dark:text-stone-400">
            Projects
          </em>
        </BulletItem>
        <ul className="flex flex-col gap-2 pl-5">
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
